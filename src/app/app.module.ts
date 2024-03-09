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
import { OwnerPageComponent } from './shared/owner-page/owner-page.component';
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
    OwnerPageComponent,
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
