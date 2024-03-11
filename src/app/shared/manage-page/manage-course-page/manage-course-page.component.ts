import { Router } from '@angular/router';
import { HelperDate } from './../../../core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/coures';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-manage-course-page',
  templateUrl: './manage-course-page.component.html',
  styleUrls: ['./manage-course-page.component.css']
})
export class ManageCoursePageComponent implements OnInit {
  listCourse: Course[] = [];
  constructor(
    private courseService: CourseService,
    public helperDate: HelperDate,
    private router: Router
    ) {}
  ngOnInit(): void {
      this.courseService.getAll().subscribe((res: ResponseDto) => {
        this.listCourse = res.data;
      });
  }
  public goToCourseDetail(courseId: number) {

  }
}
