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

const appRoutes: Routes = [

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
          { path: 'list', component: RubricListComponent },
          { path: 'create', component: RubricCreateComponent }
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
