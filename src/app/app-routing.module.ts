import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './users/board-user/board-user.component';
import { BoardModeratorComponent } from './users/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './users/./board-admin/board-admin.component';
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
import {  ResultsuploadComponent} from './components/resultsupload/resultsupload.component';
import { CSEComponent} from './departmentComponents/cse/cse.component';
import { EEEComponent} from './departmentComponents/eee/eee.component';
import { ECMComponent} from './departmentComponents/ecm/ecm.component';
import { ECEComponent} from './departmentComponents/ece/ece.component';
import { MEComponent} from './departmentComponents/me/me.component';
import { CIVILComponent} from './departmentComponents/civil/civil.component';
import { AddcourseComponent} from './components/course_components/addcourse/addcourse.component';
import { CoursedetailsComponent} from './components/course_components/coursedetails/coursedetails.component';
import { RegistrationsComponent } from './dashboardcomponents/registrations/registrations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },{ path: 'admin/sinfo/register', component: RegisterComponent },
  { path: 'admin/sinfo/students', component: StudentComponent },
  { path: 'admin/departments/rupload', component: ResultsuploadComponent },
  { path: 'admin/departments/cse', component: CSEComponent },
  { path: 'admin/departments/ece', component: ECEComponent },{ path: 'admin/departments/ecm', component: ECMComponent },
  { path: 'admin/departments/eee', component: EEEComponent },{ path: 'admin/departments/me', component: MEComponent },
  { path: 'admin/departments/civil', component: CIVILComponent },
  { path: 'user', component: BoardUserComponent },{ path: 'profile', component: ProfileComponent },
  { path: 'user/profile', component: ProfileComponent },{ path: 'admin/profile', component: ProfileComponent },
  { path: 'user/acedmic', component: AcademicdetailsComponent},{ path: 'user/timetable', component: TimetableComponent},
  { path: 'user/attendance', component: AttendanceComponent},{ path: 'user/courses', component: CoursesComponent },
  { path: 'user/feepay', component: FeePaymentComponent },{ path: 'user/results', component: ResultsComponent },
  { path: 'user/settings', component: SettingsComponent},{ path: 'user/sem', component: TempComponent },
  { path: 'mod', component: BoardModeratorComponent },{ path: 'adminstudent', component: StudentComponent },
  { path: 'admin/sinfo', component: AdmintostudentComponent },{ path: 'admin', component: BoardAdminComponent },
  { path: 'admin/attendanceregistar', component: AdminAttendanceRegistarComponent },{ path: 'admin/departments', component: DepartmentsComponent },
  { path: 'admin/courses', component: ManageCoursesComponent },
  { path: 'admin/courses/addcourse', component: AddcourseComponent },
  { path: 'admin/courses/courselist', component: CoursedetailsComponent },
  { path: 'user/registration', component: RegistrationsComponent},
  { path: 'admin/settings', component: AdminSettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
