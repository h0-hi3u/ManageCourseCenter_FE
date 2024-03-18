import { FeedbackService } from 'src/app/core/services/feedback.service';
import { HelperDate } from './../../../core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/coures';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-parent-course-detail-page',
  templateUrl: './parent-course-detail-page.component.html',
  styleUrls: ['./parent-course-detail-page.component.css']
})
export class ParentCourseDetailPageComponent implements OnInit{
  course: Course = {} as Course;
  courseId: string = '';
  listFeedback: Feedback[] = [];
  currentDate = new Date();
  isDisable: boolean = false;
  constructor(
    private courseService: CourseService,
    private router: Router,
    public helperDate: HelperDate,
    private feedbackService: FeedbackService
  ) {}
  ngOnInit(): void {
    console.log(this.currentDate);
    
      const listUrl = this.router.url.split('/');
      this.courseId = listUrl[listUrl.length - 1];
      this.courseService.getDetailCourse(parseInt(this.courseId)).subscribe((res: ResponseDto) => {
        this.course = res.data;
        const newDate = new Date(this.course.closeFormTime);
        this.isDisable = newDate < this.currentDate;
      })
      this.feedbackService.getFeedbackByCourseId(this.courseId).subscribe((res: ResponseDto) => {
        this.listFeedback = res.data;
      })
  }
}
