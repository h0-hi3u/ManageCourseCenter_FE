import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CoursesPageComponent } from './shared/courses-page/courses-page.component';
import { ContactPageComponent } from './shared/contact-page/contact-page.component';
import { CourseDetailPageComponent } from './shared/course-detail-page/course-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'course-detail', component: CourseDetailPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
