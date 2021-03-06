import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends TranslatableComponent {

  registrationForm: FormGroup;

  constructor(private authService: AuthService,
    private translateService: TranslateService,
    private router: Router,
    private fb: FormBuilder) {
      super(translateService);
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
      role: ['TEACHER']
    });
  }

  onRegister() {
    this.authService.registerUser(this.registrationForm.value)
      .then(res => {
        this.router.navigate(['/login']);
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
