import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from '../assets/material';

import { HeaderComponent } from './components/master/header/header.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
