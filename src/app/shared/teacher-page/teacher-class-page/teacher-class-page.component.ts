import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/core/models/class';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ClassService } from 'src/app/core/services/class.service';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-class-page',
  templateUrl: './teacher-class-page.component.html',
  styleUrls: ['./teacher-class-page.component.css']
})
export class TeacherClassPageComponent implements OnInit{
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
  console.log(count);
  
const totalPage = Math.ceil(count/this.pageSize);
console.log(totalPage);

  for (let i = 1; i <= totalPage; i++) {
    this.arrayTotalPage.push(i);
  }
}
public movePage(currentPage?: number) {
  this.currentPageIndex = currentPage || this.currentPageIndex;
  this.arrayTotalPage = [];
  const teacherId = localStorage.getItem('teacherId') || '';
     this.classService.getClassByTeacherId(teacherId, this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
      this.listClass = res.data.data;
      this.getArrayTotalPage(res.data.totalRecords)
     });
}
}
