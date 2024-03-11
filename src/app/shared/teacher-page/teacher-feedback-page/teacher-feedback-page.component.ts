import { FeedbackService } from './../../../core/services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-teacher-feedback-page',
  templateUrl: './teacher-feedback-page.component.html',
  styleUrls: ['./teacher-feedback-page.component.css']
})
export class TeacherFeedbackPageComponent implements OnInit{
  listFeedback: Feedback[] = [];
  constructor(
    private feedbackService: FeedbackService,
    ) {

  }
  ngOnInit(): void {
    const teacherId = localStorage.getItem('teacherId');
    this.feedbackService.getFeedbackByTeacherId(parseInt(teacherId || '0'), 5, 1).subscribe((res: ResponseDto) => {
      this.listFeedback = res.data.data;
    });
  }
}
