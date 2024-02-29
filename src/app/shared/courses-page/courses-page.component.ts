import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/coures';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  listCourse: Course[] = [];
  constructor(public router: Router, private courseService: CourseService) {}
  ngOnInit(): void {
      this.courseService.getAll().subscribe((res: ResponseDto) => {
        this.listCourse = res.data;
      })
  }
  public goToCourseDetail(id: number) {
    this.router.navigate(['/course-detail']);
  }
}
