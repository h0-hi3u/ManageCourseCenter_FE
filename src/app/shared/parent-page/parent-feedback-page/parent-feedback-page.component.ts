import { FeedbackService } from 'src/app/core/services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-parent-feedback-page',
  templateUrl: './parent-feedback-page.component.html',
  styleUrls: ['./parent-feedback-page.component.css']
})
export class ParentFeedbackPageComponent implements OnInit{
  listFeedback: Feedback[] = [];
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(private feedbackService: FeedbackService) {}
  ngOnInit(): void {
    this.movePage();
  }
  getArrayTotalPage(count: number) {
    
    const totalPage = Math.ceil(count/this.pageSize);
    
      for (let i = 1; i <= totalPage; i++) {
        this.arrayTotalPage.push(i);
      }
    }
    public movePage(currentPage?: number) {
      this.currentPageIndex = currentPage || this.currentPageIndex;
      this.arrayTotalPage = [];
      const parentId = localStorage.getItem('parentId') || '';
      this.feedbackService.getFeedbackByParentId(parseInt(parentId || '0'), this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
        this.listFeedback = res.data.data;
        this.getArrayTotalPage(res.data.totalRecords);
      })
    }
}
