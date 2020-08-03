import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(private authService: AuthService,
    private fb: FormBuilder) {
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
        //this.router.navigate(['/login']);
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
