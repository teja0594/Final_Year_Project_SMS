import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './users/./board-admin/board-admin.component';
import { BoardModeratorComponent } from './users/board-moderator/board-moderator.component';
import { BoardUserComponent } from './users/board-user/board-user.component';
import {MaterialsModule} from './materials/materials.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './temp/temp.component';
import { AcademicdetailsComponent } from './dashboardcomponents/academicdetails/academicdetails.component';
import { TimetableComponent } from './dashboardcomponents/timetable/timetable.component';
import { AttendanceComponent } from './dashboardcomponents/attendance/attendance.component';
import { CoursesComponent } from './dashboardcomponents/courses/courses.component';
import { FeePaymentComponent } from './dashboardcomponents/fee-payment/fee-payment.component';
import { ResultsComponent } from './dashboardcomponents/results/results.component';
import { SettingsComponent } from './dashboardcomponents/settings/settings.component';
import { StudentComponent } from './components/student/student.component';
import { AdmintostudentComponent } from './components/admintostudent/admintostudent.component';
import { AdminAttendanceRegistarComponent } from './components/admin-attendance-registar/admin-attendance-registar.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ManageCoursesComponent } from './components/course_components/manage-courses/manage-courses.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { Temp2Component } from './temp2/temp2.component';
import { ResultsuploadComponent } from './components/resultsupload/resultsupload.component';
import { CSEComponent } from './departmentComponents/cse/cse.component';
import { ECEComponent } from './departmentComponents/ece/ece.component';
import { ECMComponent } from './departmentComponents/ecm/ecm.component';
import { EEEComponent } from './departmentComponents/eee/eee.component';
import { MEComponent } from './departmentComponents/me/me.component';
import { CIVILComponent } from './departmentComponents/civil/civil.component';
import { AddcourseComponent } from './components/course_components/addcourse/addcourse.component';
import { CoursedetailsComponent } from './components/course_components/coursedetails/coursedetails.component';
import { MsgComponent } from './components/course_components/addcourse/msg/msg.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { Alert1Component } from './alerts/alert1/alert1.component';
import { Alert2Component } from './alerts/alert2/alert2.component';
import { Alert3Component } from './alerts/alert3/alert3.component';
import { Alert4Component } from './alerts/alert4/alert4.component';
import { Alert5Component } from './alerts/alert5/alert5.component';
import { RegistrationsComponent } from './dashboardcomponents/registrations/registrations.component';
import { ProfileresultsComponent } from './profileresults/profileresults.component';
import { TempprofileComponent } from './tempprofile/tempprofile.component';
import { AdmintempresultsComponent } from './admintempresults/admintempresults.component';
import { Profileresults2Component } from './profileresults2/profileresults2.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CertificatesComponent } from './certificates/certificates.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TempComponent,
    AcademicdetailsComponent,
    TimetableComponent,
    AttendanceComponent,
    CoursesComponent,
    FeePaymentComponent,
    ResultsComponent,
    SettingsComponent,
    StudentComponent,
    AdmintostudentComponent,
    AdminAttendanceRegistarComponent,
    DepartmentsComponent,
    ManageCoursesComponent,
    AdminSettingsComponent,
    FooterComponent,
    Temp2Component,
    ResultsuploadComponent,
    CSEComponent,
    ECEComponent,
    ECMComponent,
    EEEComponent,
    MEComponent,
    CIVILComponent,
    AddcourseComponent,
    CoursedetailsComponent,
    MsgComponent,
    UpdatestudentComponent,
    Alert1Component,
    Alert2Component,
    Alert3Component,
    Alert4Component,
    Alert5Component,
    RegistrationsComponent,
    ProfileresultsComponent,
    TempprofileComponent,
    AdmintempresultsComponent,
    Profileresults2Component,
    FileUploadComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCsvParserModule,
    HttpClientModule,
    MaterialsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
