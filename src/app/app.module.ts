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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
//Components
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { TranslatableComponent } from './components/shared/translatable/translatable.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationBarComponent } from './components/master/navigation-bar/navigation-bar.component';
import { SidenavComponent } from './components/master/sidenav/sidenav.component';
import { DeniedAccessPageComponent } from './components/shared/denied-access-page/denied-access-page.component';
import { RubricListComponent } from './components/rubric/rubric-list/rubric-list.component';
import { RubricCreateComponent } from './components/rubric/rubric-create/rubric-create.component';
import { AssessmentCreateComponent } from './components/assessment/assessment-create/assessment-create.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { StudentListByCourseComponent } from './components/student/student-list-by-course/student-list-by-course.component';
import { RubricViewComponent } from './components/rubric/rubric-view/rubric-view.component';

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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TranslatableComponent,
    NavigationBarComponent,
    SidenavComponent,
    DeniedAccessPageComponent,
    RubricListComponent,
    RubricCreateComponent,
    AssessmentCreateComponent,
    CourseListComponent,
    StudentListByCourseComponent,
    RubricViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    LayoutModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
