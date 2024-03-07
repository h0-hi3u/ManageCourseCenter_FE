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
import { OwnerPageComponent } from './shared/owner-page/owner-page.component';
import { ParentPageComponent } from './shared/parent-page/parent-page.component';
import { StaffPageComponent } from './shared/staff-page/staff-page.component';
import { TeacherPageComponent } from './shared/teacher-page/teacher-page.component';
import { ProfilePageComponent } from './shared/profile-page/profile-page.component';

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
      { path: '', component: ChildrenClassPageComponent}
    ],
  },
  { path: "forgot-password", component: ForgotPasswordPageComponent},
  { path: "login", component: LoginPageComponent},
  { path: "register", component: RegisterPageComponent},
  { path: 'admin', component: AdminPageComponent}, 
  { path: 'owner', component: OwnerPageComponent},
  { path: 'parent', component: ParentPageComponent},
  { path: 'staff', component: StaffPageComponent},
  { path: 'teacher', component: TeacherPageComponent},
  { path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
