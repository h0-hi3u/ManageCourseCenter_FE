import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CoursesPageComponent } from './shared/courses-page/courses-page.component';
import { ContactPageComponent } from './shared/contact-page/contact-page.component';
import { CourseDetailPageComponent } from './shared/course-detail-page/course-detail-page.component';
import { ForgotPasswordPageComponent } from './shared/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { RegisterPageComponent } from './shared/register-page/register-page.component';
import { ChildrenPageComponent } from './shared/children-page/children-page.component';
import { ChildrenClassPageComponent } from './shared/children-page/children-class-page/children-class-page.component';
import { AdminPageComponent } from './shared/admin-page/admin-page.component';
import { ManagePageComponent } from './shared/manage-page/manage-page.component';
import { ParentPageComponent } from './shared/parent-page/parent-page.component';
import { StaffPageComponent } from './shared/staff-page/staff-page.component';
import { TeacherPageComponent } from './shared/teacher-page/teacher-page.component';
import { ProfilePageComponent } from './shared/profile-page/profile-page.component';
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
import { ManageClassPageComponent } from './shared/manage-page/manage-class-page/manage-class-page.component';
import { ManageEquipmentPageComponent } from './shared/manage-page/manage-equipment-page/manage-equipment-page.component';
import { ManageFeedbackPageComponent } from './shared/manage-page/manage-feedback-page/manage-feedback-page.component';
import { ManageParentPageComponent } from './shared/manage-page/manage-parent-page/manage-parent-page.component';
import { ManagePaymentPageComponent } from './shared/manage-page/manage-payment-page/manage-payment-page.component';
import { ManageReportPageComponent } from './shared/manage-page/manage-report-page/manage-report-page.component';
import { ManageRoomPageComponent } from './shared/manage-page/manage-room-page/manage-room-page.component';
import { ManageStaffPageComponent } from './shared/manage-page/manage-staff-page/manage-staff-page.component';
import { ManageStudentPageComponent } from './shared/manage-page/manage-student-page/manage-student-page.component';
import { ManageTeacherPageComponent } from './shared/manage-page/manage-teacher-page/manage-teacher-page.component';
import { ChildrenCreateFeedbackPageComponent } from './shared/children-page/children-create-feedback-page/children-create-feedback-page.component';
import { ParentCreateChildrenPageComponent } from './shared/parent-page/parent-create-children-page/parent-create-children-page.component';
import { TeacherCreateReportPageComponent } from './shared/teacher-page/teacher-create-report-page/teacher-create-report-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'course-detail/:id', component: CourseDetailPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  {
    path: 'children',
    component: ChildrenPageComponent,
    children: [
      { path: '', component: ChildrenClassPageComponent },
      { path: 'feedback', component: ChildrenFeedbackPageComponent },
      { path: 'create-feedback', component: ChildrenCreateFeedbackPageComponent}
    ],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    // children: [
    //   {path: '', }
    // ]
  },

  {
    path: 'manage',
    component: ManagePageComponent,
    children: [
      { path: '', component: ManageActivityPageComponent },
      { path: 'admin', component: ManageClassPageComponent },
      { path: 'class', component: ManageClassPageComponent },
      { path: 'equipment', component: ManageEquipmentPageComponent },
      { path: 'feedback', component: ManageFeedbackPageComponent },
      { path: 'parent', component: ManageParentPageComponent },
      { path: 'payment', component: ManagePaymentPageComponent },
      { path: 'report', component: ManageReportPageComponent },
      { path: 'room', component: ManageRoomPageComponent },
      { path: 'staff', component: ManageStaffPageComponent },
      { path: 'student', component: ManageStudentPageComponent },
      { path: 'teacher', component: ManageTeacherPageComponent },
    ],
  },
  {
    path: 'parent',
    component: ParentPageComponent,
    children: [
      { path: '', component: ParentManageChildrenPageComponent },
      { path: 'feedback', component: ParentFeedbackPageComponent },
      { path: 'payment', component: ParentManagePaymentPageComponent },
      { path: 'create-children', component: ParentCreateChildrenPageComponent}
    ],
  },
  {
    path: 'staff',
    component: StaffPageComponent,
    children: [
      { path: '', component: StaffReportPageComponent },
      { path: 'room', component: StaffRoomPageComponent },
    ],
  },
  {
    path: 'teacher',
    component: TeacherPageComponent,
    children: [
      { path: '', component: TeacherClassPageComponent },
      { path: 'feedback', component: TeacherFeedbackPageComponent },
      { path: 'report', component: TeacherReportPageComponent },
      { path: 'create-report', component: TeacherCreateReportPageComponent}
    ],
  },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
