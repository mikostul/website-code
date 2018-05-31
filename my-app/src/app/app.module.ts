import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

/* PDFExportModule */
import {PDFExportModule} from "@progress/kendo-angular-pdf-export";

import {MatFormFieldModule} from '@angular/material/form-field';

import {DataService } from './Data.service';
import {DataGuard} from "./data.guard";
import {Data2Guard} from "./data2.guard";
import {Data3Guard} from "./data3.guard";

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OptinComponent } from './optin/optin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationConfirmedComponent } from './registration-confirmed/registration-confirmed.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SearchIDComponent } from './search-id/search-id.component';
import { CoursesComponent } from './courses/courses.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { StartplanComponent } from './startplan/startplan.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreeprogressComponent } from './degreeprogress/degreeprogress.component';
import { FviewProfileComponent } from './fview-profile/fview-profile.component';
import { FrequirementsComponent } from './frequirements/frequirements.component';
import { FstartPlanComponent } from './fstart-plan/fstart-plan.component';
import { FeditProfileComponent } from './fedit-profile/fedit-profile.component';
import { FdegreeProgressComponent } from './fdegree-progress/fdegree-progress.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { AdminComponent } from './admin/admin.component';
import { AdegreeProgressComponent } from './adegree-progress/adegree-progress.component';
import { AeditProfileComponent } from './aedit-profile/aedit-profile.component';
import { ArequirementsComponent } from './arequirements/arequirements.component';
import { AstartPlanComponent } from './astart-plan/astart-plan.component';
import { AviewProfileComponent } from './aview-profile/aview-profile.component';
import { AcoursesComponent } from './acourses/acourses.component';
import { FcoursesComponent } from './fcourses/fcourses.component';
import { AenrollmentComponent } from './aenrollment/aenrollment.component';
import { AclassesComponent } from './aclasses/aclasses.component';
import { AprogramsComponent } from './aprograms/aprograms.component';
import { AstudentsComponent } from './astudents/astudents.component';
import { AremoveUserComponent } from './aremove-user/aremove-user.component';
import { AsearchIdComponent } from './asearch-id/asearch-id.component';
import { AllpagesComponent } from './allpages/allpages.component';
import { AccountcreationComponent } from './accountcreation/accountcreation.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DegreePlanFormComponent } from './degree-plan-form/degree-plan-form.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'allpages', pathMatch: 'full' },
  { path: 'home', component: StudentComponent, canActivate: [Data3Guard] },
  { path: 'home3', component: AdminComponent, canActivate: [DataGuard]},
  { path: 'home-faculty', component: FacultyComponent, canActivate: [Data2Guard]},
  { path: 'view-profile', component: ViewProfileComponent, canActivate: [Data3Guard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [Data3Guard]},
  { path: 'optin', component: OptinComponent },
  { path: 'registration-complete', component: RegistrationConfirmedComponent },
  { path: 'SearchID', component: SearchIDComponent, canActivate: [Data2Guard] },
  { path: 'courses', component: CoursesComponent, canActivate: [Data3Guard] },
  { path: 'requirements', component: RequirementsComponent, canActivate: [Data3Guard] },
  { path: 'start-plan', component: StartplanComponent, canActivate: [Data3Guard] },
  { path: 'login', component: LoginComponent },
  { path: 'degree-progress', component: DegreeprogressComponent, canActivate: [Data3Guard] },
  { path: 'logged-out', component: LoggedOutComponent },
  { path: 'view-profile2', component: FviewProfileComponent, canActivate: [Data2Guard] },
  { path: 'start-plan1', component: FstartPlanComponent, canActivate: [Data2Guard] },
  { path: 'requirements1', component: FrequirementsComponent, canActivate: [Data2Guard] },
  { path: 'edit-profile1', component: FeditProfileComponent, canActivate: [Data2Guard] },
  { path: 'degree-progress1', component: FdegreeProgressComponent, canActivate: [Data2Guard] },
  { path: 'courses1', component: FcoursesComponent, canActivate: [Data2Guard] },
  { path: 'view-profile3', component: AviewProfileComponent, canActivate: [DataGuard] },
  { path: 'list-students', component: AstudentsComponent, canActivate: [DataGuard] },
  { path: 'start-plan3', component: AstartPlanComponent, canActivate: [DataGuard] },
  { path: 'degree-plan-form', component: DegreePlanFormComponent, canActivate: [Data3Guard] },
  { path: 'SearchID3', component: AsearchIdComponent, canActivate: [DataGuard] },
  { path: 'requirements3', component: ArequirementsComponent, canActivate: [DataGuard]},
  { path: 'remove', component: AremoveUserComponent, canActivate: [DataGuard] },



  {path: 'team', component: TeamComponent}, // JL




  { path: 'allpages', component: AllpagesComponent },
  { path: 'programs', component: AprogramsComponent, canActivate: [DataGuard] },
  { path: 'enrollment', component: AenrollmentComponent, canActivate: [DataGuard] },
  { path: 'edit-profile3', component: AeditProfileComponent, canActivate: [DataGuard] },
  { path: 'degree-progress3', component: AdegreeProgressComponent, canActivate: [DataGuard] },


  // { path: 'courses3', component: AcoursesComponent, canActivate: [DataGuard] },

  {path: 'courses3', component: AcoursesComponent, canActivate: [DataGuard]},   // Working on this component. JL




  { path: 'classes', component: AclassesComponent, canActivate: [DataGuard] },
  { path: 'registration', component: AccountcreationComponent },
  { path: 'recover', component: RecoverPasswordComponent },

  { path: 'add', component: AddUserComponent, canActivate: [DataGuard] },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ViewProfileComponent,
    EditProfileComponent,
    OptinComponent,
    NotFoundComponent,
    RegistrationConfirmedComponent,
    FacultyComponent,
    SearchIDComponent,
    CoursesComponent,
    RequirementsComponent,
    StartplanComponent,
    LoginComponent,
    DegreeprogressComponent,
    FviewProfileComponent,
    FrequirementsComponent,
    FstartPlanComponent,
    FeditProfileComponent,
    FdegreeProgressComponent,
    LoggedOutComponent,
    AdminComponent,
    AdegreeProgressComponent,
    AeditProfileComponent,
    ArequirementsComponent,
    AstartPlanComponent,
    AviewProfileComponent,
    AcoursesComponent,
    FcoursesComponent,
    AenrollmentComponent,
    AclassesComponent,
    AprogramsComponent,
    AstudentsComponent,
    AremoveUserComponent,
    AsearchIdComponent,
    AllpagesComponent,
    AccountcreationComponent,
    RecoverPasswordComponent,
    AddUserComponent,
    DegreePlanFormComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    PDFExportModule,
    MatFormFieldModule
  ],
  providers: [DataService, DataGuard, Data2Guard,Data3Guard],
  bootstrap: [AppComponent]
})


export class AppModule { }





