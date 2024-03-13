import { FeedbackService } from './../../../core/services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-feedback-page',
  templateUrl: './teacher-feedback-page.component.html',
  styleUrls: ['./teacher-feedback-page.component.css']
})
export class TeacherFeedbackPageComponent implements OnInit{
  listFeedback: Feedback[] = [];
  currentPageIndex = 1;
  pageSize = 4;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private feedbackService: FeedbackService,
    ) {}
  ngOnInit(): void {
    this.movePage();
  }
  getArrayTotalPage(count: number) {
    
  const totalPage = Math.ceil(count/this.pageSize);
  console.log(totalPage);
  
    for (let i = 1; i <= totalPage; i++) {
      this.arrayTotalPage.push(i);
    }
  }
  public movePage(currentPage?: number) {
    this.currentPageIndex = currentPage || this.currentPageIndex;
    this.arrayTotalPage = [];
    const teacherId = localStorage.getItem('teacherId');
    this.feedbackService.getFeedbackByTeacherId(parseInt(teacherId || '0'), this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
      this.listFeedback = res.data.data;
      this.getArrayTotalPage(res.data.totalRecords);
    });
  }
}
