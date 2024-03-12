import { Class } from 'src/app/core/models/class';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedbackDto/feedback';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ClassService } from 'src/app/core/services/class.service';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-children-class-page',
  templateUrl: './children-class-page.component.html',
  styleUrls: ['./children-class-page.component.css']
})
export class ChildrenClassPageComponent implements OnInit{
  listClass: Class[] = [];
  pageSize: number = 5;
  currentPageIndex = 1;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(private classService: ClassService) {}
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
    const childrenId = localStorage.getItem('childrenId') || '';
       this.classService.getClassByChildrenId(childrenId, this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
        this.listClass = res.data.data;
        this.getArrayTotalPage(res.data.totalRecords)
       });
  }
}
