import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).then(_ => {
      form.reset();
      /*this.authService.loadIDtoken().then( idToken => {
        console.log('idToken LOGIN COMPONENT: ', idToken);
        this.router.navigateByUrl(this.returnUrl);
      }).catch((error) => {
        console.log(error);
      });*/
    }).catch((error) => {
      console.log(error);
    });
  }

}
