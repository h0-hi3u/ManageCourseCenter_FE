import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CoursesPageComponent } from './shared/courses-page/courses-page.component';
import { ContactPageComponent } from './shared/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailPageComponent } from './shared/course-detail-page/course-detail-page.component';
import { ForgotPasswordPageComponent } from './shared/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { RegisterPageComponent } from './shared/register-page/register-page.component';
import { ChildrenPageComponent } from './shared/children-page/children-page.component';
import { ChildrenClassPageComponent } from './shared/children-page/children-class-page/children-class-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminPageComponent } from './shared/admin-page/admin-page.component';
import { ManagePageComponent } from './shared/manage-page/manage-page.component';
import { ParentPageComponent } from './shared/parent-page/parent-page.component';
import { StaffPageComponent } from './shared/staff-page/staff-page.component';
import { TeacherPageComponent } from './shared/teacher-page/teacher-page.component';
import { ProfilePageComponent } from './shared/profile-page/profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildrenFeedbackPageComponent } from './shared/children-page/children-feedback-page/children-feedback-page.component';
import { ParentFeedbackPageComponent } from './shared/parent-page/parent-feedback-page/parent-feedback-page.component';
import { ParentManageChildrenPageComponent } from './shared/parent-page/parent-manage-children-page/parent-manage-children-page.component';
import { ParentManagePaymentPageComponent } from './shared/parent-page/parent-manage-payment-page/parent-manage-payment-page.component';
import { StaffReportPageComponent } from './shared/staff-page/staff-report-page/staff-report-page.component';
import { StaffRoomPageComponent } from './shared/staff-page/staff-room-page/staff-room-page.component';
import { TeacherClassPageComponent } from './shared/teacher-page/teacher-class-page/teacher-class-page.component';
import { TeacherFeedbackPageComponent } from './shared/teacher-page/teacher-feedback-page/teacher-feedback-page.component';
import { TeacherReportPageComponent } from './shared/teacher-page/teacher-report-page/teacher-report-page.component';
import { ManageActivityPageComponent } from './shared/manage-page/manage-activity-page/manage-activity-page.component';
import { ManageAdminPageComponent } from './shared/manage-page/manage-admin-page/manage-admin-page.component';
import { ManageClassPageComponent } from './shared/manage-page/manage-class-page/manage-class-page.component';
import { ManageEquipmentPageComponent } from './shared/manage-page/manage-equipment-page/manage-equipment-page.component';
import { ManageParentPageComponent } from './shared/manage-page/manage-parent-page/manage-parent-page.component';
import { ManagePaymentPageComponent } from './shared/manage-page/manage-payment-page/manage-payment-page.component';
import { ManageReportPageComponent } from './shared/manage-page/manage-report-page/manage-report-page.component';
import { ManageRoomPageComponent } from './shared/manage-page/manage-room-page/manage-room-page.component';
import { ManageStaffPageComponent } from './shared/manage-page/manage-staff-page/manage-staff-page.component';
import { ManageStudentPageComponent } from './shared/manage-page/manage-student-page/manage-student-page.component';
import { ManageTeacherPageComponent } from './shared/manage-page/manage-teacher-page/manage-teacher-page.component';
import { ManageFeedbackPageComponent } from './shared/manage-page/manage-feedback-page/manage-feedback-page.component';
import { ChildrenCreateFeedbackPageComponent } from './shared/children-page/children-create-feedback-page/children-create-feedback-page.component';
import { ParentCreateChildrenPageComponent } from './shared/parent-page/parent-create-children-page/parent-create-children-page.component';
import { TeacherCreateReportPageComponent } from './shared/teacher-page/teacher-create-report-page/teacher-create-report-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    LayoutComponent,
    CoursesPageComponent,
    ContactPageComponent,
    CourseDetailPageComponent,
    ForgotPasswordPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ChildrenPageComponent,
    ChildrenClassPageComponent,
    AdminPageComponent,
    ManagePageComponent,
    ParentPageComponent,
    StaffPageComponent,
    TeacherPageComponent,
    ProfilePageComponent,
    ChildrenFeedbackPageComponent,
    ParentFeedbackPageComponent,
    ParentManageChildrenPageComponent,
    ParentManagePaymentPageComponent,
    StaffReportPageComponent,
    StaffRoomPageComponent,
    TeacherClassPageComponent,
    TeacherFeedbackPageComponent,
    TeacherReportPageComponent,
    ManageActivityPageComponent,
    ManageAdminPageComponent,
    ManageClassPageComponent,
    ManageEquipmentPageComponent,
    ManageParentPageComponent,
    ManagePaymentPageComponent,
    ManageReportPageComponent,
    ManageRoomPageComponent,
    ManageStaffPageComponent,
    ManageStudentPageComponent,
    ManageTeacherPageComponent,
    ManageFeedbackPageComponent,
    ChildrenCreateFeedbackPageComponent,
    ParentCreateChildrenPageComponent,
    TeacherCreateReportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
