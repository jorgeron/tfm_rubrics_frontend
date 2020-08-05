import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { Actor } from 'src/app/models/actor.model';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent extends TranslatableComponent implements OnInit {
  currentActor: Actor = this.authService.getCurrentActor();
  activeRole = this.currentActor ? this.currentActor.role.toString() : 'anonymous';

  constructor(private translateService: TranslateService,
    private authService: AuthService,
    private router: Router) {
    super(translateService);
  }

  ngOnInit() {
    this.authService.userLoggedIn.subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.currentActor = this.authService.getCurrentActor();
        this.activeRole = this.currentActor.role.toString();
      } else {
        this.currentActor = null;
        this.activeRole = 'anonymous';
      }
    });
  }

  logout() {
    this.authService.logout()
      .then(_ => {
        this.currentActor = null;
        this.activeRole = 'anonymous';
        this.router.navigate(['/login']);
      }).catch(error => {
        console.log(error);
      });
  }
}
