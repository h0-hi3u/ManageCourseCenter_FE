import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { Course } from 'src/app/core/models/coures';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-parent-course-page',
  templateUrl: './parent-course-page.component.html',
  styleUrls: ['./parent-course-page.component.css']
})
export class ParentCoursePageComponent implements OnInit{
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
    this.router.navigate([`/parent/course-detail/${courseId}`]);
  }
}
