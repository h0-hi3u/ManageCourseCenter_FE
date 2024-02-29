import { CourseService } from './../../core/services/course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/coures';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
