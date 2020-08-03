import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from '../assets/material';
// Dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Components
import { HeaderComponent } from './components/master/header/header.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';

export const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAEMpfYuuOBSDudswoFWhBdwjTFKjkQOUM",
  authDomain: "tfm-frontend.firebaseapp.com",
  databaseURL: "https://tfm-frontend.firebaseio.com",
  projectId: "tfm-frontend",
  storageBucket: "tfm-frontend.appspot.com",
  messagingSenderId: "1099489219625",
  appId: "1:1099489219625:web:d9e97364e530aafef63838"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
