import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ActorRoleGuard } from './guards/actor-role.guard';
import { DeniedAccessPageComponent } from './components/shared/denied-access-page/denied-access-page.component';
import { RubricListComponent } from './components/rubric/rubric-list/rubric-list.component';
import { RubricCreateComponent } from './components/rubric/rubric-create/rubric-create.component';
import { AssessmentCreateComponent } from './components/assessment/assessment-create/assessment-create.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { StudentListByCourseComponent } from './components/student/student-list-by-course/student-list-by-course.component';
import { RubricViewComponent } from './components/rubric/rubric-view/rubric-view.component';

const appRoutes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [ActorRoleGuard], data: { expectedRole: 'anonymous' }
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [ActorRoleGuard], data: { expectedRole: 'anonymous' }
  },
  {
    path: 'teacher', canActivate: [ActorRoleGuard], data: { expectedRole: 'TEACHER' },
    children: [
      {
        path: 'rubrics',
        children: [
          { path: ':idRubric/assessment', component: AssessmentCreateComponent },
          { path: ':idRubric/view', component: RubricViewComponent },
          { path: 'list', component: RubricListComponent },
          { path: 'create', component: RubricCreateComponent }
        ]
      },
      {
        path: 'courses',
        children: [
          { path: ':idCourse/students', component: StudentListByCourseComponent },
          { path: 'list', component: CourseListComponent }
        ]
      }
    ]
  },
  { path: 'denied-access', component: DeniedAccessPageComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
