import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) {
    super(translateService);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('currentActor loginComponent: ', this.authService.currentActor);
    this.authService.getGoogleOauthUrl().then(result => {
      this.OAUTH_URL = result.url;
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/teacher/rubrics/list';

    this.route.queryParams.subscribe(queryParams => {
      const code = queryParams['code'];
      if (code) {
        console.log('code: ', code);
        this.onLoginWithGoogle(code);
      }
    });
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
