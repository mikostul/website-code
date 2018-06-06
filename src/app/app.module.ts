import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {DataService} from "./data.service";
import {DataGuard} from "./data.guard";
import {Data2Guard} from "./data2.guard";
import {Data3Guard} from "./data3.guard";

import {TransfererService} from "./transferer.service";

import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {TeamComponent} from './team/team.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {StartplanComponent} from './startplan/startplan.component';
import {SearchIdComponent} from './search-id/search-id.component';
import {RequirementsComponent} from './requirements/requirements.component';
import {RegistrationConfirmedComponent} from './registration-confirmed/registration-confirmed.component';
import {RecoverPasswordComponent} from './recover-password/recover-password.component';
import {OptinComponent} from './optin/optin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {LoggedOutComponent} from './logged-out/logged-out.component';
import {FviewProfileComponent} from './fview-profile/fview-profile.component';
import {FstartPlanComponent} from './fstart-plan/fstart-plan.component';
import {FrequirementsComponent} from './frequirements/frequirements.component';
import {FeditProfileComponent} from './fedit-profile/fedit-profile.component';
import {FdegreeProgressComponent} from './fdegree-progress/fdegree-progress.component';
import {FcoursesComponent} from './fcourses/fcourses.component';
import {FacultyComponent} from './faculty/faculty.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {DegreeprogressComponent} from './degreeprogress/degreeprogress.component';
import {CoursesComponent} from './courses/courses.component';
import {AviewProfileComponent} from './aview-profile/aview-profile.component';
import {AstudentsComponent} from './astudents/astudents.component';
import {AstartPlanComponent} from './astart-plan/astart-plan.component';
import {AsearchIdComponent} from './asearch-id/asearch-id.component';
import {ArequirementsComponent} from './arequirements/arequirements.component';
import {AremoveUserComponent} from './aremove-user/aremove-user.component';
import {AprogramsComponent} from './aprograms/aprograms.component';
import {AeditProfileComponent} from './aedit-profile/aedit-profile.component';
import {AdminComponent} from './admin/admin.component';
import {AdegreeProgressComponent} from './adegree-progress/adegree-progress.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AcoursesComponent} from './acourses/acourses.component';
import {AclassesComponent} from './aclasses/aclasses.component';
import {AccountcreationComponent} from './accountcreation/accountcreation.component';
import {DegreePlanFormComponent} from './degree-plan-form/degree-plan-form.component';


const appRoutes: Routes = [

  {path: 'home', component: StudentComponent},
  {path: 'team', component: TeamComponent},
  {path: 'view-profile', component: ViewProfileComponent},
  {path: 'start-plan', component: StartplanComponent},
  {path: 'SearchID', component: SearchIdComponent},
  {path: 'requirements', component: RequirementsComponent},
  {path: 'registration-complete', component: RegistrationConfirmedComponent},
  {path: 'recover', component: RecoverPasswordComponent},
  {path: 'optin', component: OptinComponent},
  {path: '*', component: NotFoundComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logged-out', component: LoggedOutComponent},
  {path: 'view-profile2', component: FviewProfileComponent},
  {path: 'start-plan1', component: FstartPlanComponent},
  {path: 'requirements1', component: FrequirementsComponent},
  {path: 'edit-profile1', component: FeditProfileComponent},
  {path: 'degree-progress1', component: FdegreeProgressComponent},
  {path: 'courses1', component: FcoursesComponent},
  {path: 'home-faculty', component: FacultyComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'degree-progress', component: DegreeprogressComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'view-profile3', component: AviewProfileComponent},
  {path: 'list-students', component: AstudentsComponent},
  {path: 'start-plan3', component: AstartPlanComponent},
  {path: 'SearchID3', component: AsearchIdComponent},
  {path: 'requirements3', component: ArequirementsComponent},
  {path: 'remove', component: AremoveUserComponent},
  {path: 'programs', component: AprogramsComponent},
  {path: 'edit-profile3', component: AeditProfileComponent},
  {path: 'home3', component: AdminComponent},
  {path: 'degree-progress3', component: AdegreeProgressComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'courses3', component: AcoursesComponent},
  {path: 'classes', component: AclassesComponent},
  {path: 'registration', component: AccountcreationComponent},
  {path: 'degree-plan-form', component: DegreePlanFormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeamComponent,
    ViewProfileComponent,
    StartplanComponent,
    SearchIdComponent,
    RequirementsComponent,
    RegistrationConfirmedComponent,
    RecoverPasswordComponent,
    OptinComponent,
    NotFoundComponent,
    LoginComponent,
    LoggedOutComponent,
    FviewProfileComponent,
    FstartPlanComponent,
    FrequirementsComponent,
    FeditProfileComponent,
    FdegreeProgressComponent,
    FcoursesComponent,
    FacultyComponent,
    EditProfileComponent,
    DegreeprogressComponent,
    CoursesComponent,
    AviewProfileComponent,
    AstudentsComponent,
    AstartPlanComponent,
    AsearchIdComponent,
    ArequirementsComponent,
    AremoveUserComponent,
    AprogramsComponent,
    AeditProfileComponent,
    AdminComponent,
    AdegreeProgressComponent,
    AddUserComponent,
    AcoursesComponent,
    AclassesComponent,
    AccountcreationComponent,
    DegreePlanFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    PDFExportModule
  ],
  providers: [DataService, DataGuard, Data2Guard, Data3Guard, TransfererService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
