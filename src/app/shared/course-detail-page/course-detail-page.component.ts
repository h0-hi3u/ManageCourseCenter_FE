import { CourseService } from 'src/app/core/services/course.service';
import { Course } from './../../core/models/coures';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit {
  course: Course = {} as Course;
  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}
  ngOnInit(): void {
      const listUrl = this.router.url.split('/');
      const id = listUrl[listUrl.length - 1];
      this.courseService.getDetailCourse(parseInt(id)).subscribe((res: ResponseDto) => {
        this.course = res.data;
      })
  }
}
