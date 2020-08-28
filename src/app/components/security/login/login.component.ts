import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const GOOGLE_LOGO_SVG = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends TranslatableComponent implements OnInit {

  private returnUrl: string;
  private OAUTH_URL: string;

  constructor(private authService: AuthService,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    super(translateService);
    this.matIconRegistry.addSvgIcon(
      "googlelogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(GOOGLE_LOGO_SVG));
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('currentActor loginComponent: ', this.authService.getCurrentActor());
    this.authService.getGoogleOauthUrl().then(result => {
      this.OAUTH_URL = result.url;
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/teacher/rubrics/list';

    if (this.authService.getCurrentActor()) {
      console.log('existe');
      this.router.navigateByUrl('/teacher/rubrics/list');
    } else {
      this.route.queryParams.subscribe(queryParams => {
        const code = queryParams['code'];
        if (code) {
          console.log('code: ', code);
          this.onLoginWithGoogle(code);
        }
      });
    }
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).then(_ => {
      form.reset();
      this.authService.loadIDtoken().then(idToken => {
        console.log('idToken LOGIN COMPONENT: ', idToken);
        this.router.navigateByUrl(this.returnUrl);
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  onLoginWithGoogle(code: string) {
    this.authService.loginWithGoogle(code).then(_ => {
      this.router.navigateByUrl(this.returnUrl);
    }).catch((error) => {
      console.log(error);
    });
  }

}
