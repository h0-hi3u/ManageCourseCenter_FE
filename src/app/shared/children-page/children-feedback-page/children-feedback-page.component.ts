import { Component } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-children-feedback-page',
  templateUrl: './children-feedback-page.component.html',
  styleUrls: ['./children-feedback-page.component.css']
})
export class ChildrenFeedbackPageComponent {
  listFeedback: Feedback[] = [];
  constructor(
    private feedbackService: FeedbackService,

    ) {}
  ngOnInit(): void {
      const childrenId = localStorage.getItem('childrenId') || '';
      this.feedbackService.getFeedbackByChildrenId(childrenId).subscribe((res: ResponseDto) => {
        this.listFeedback = res.data;
      })
  }
}
