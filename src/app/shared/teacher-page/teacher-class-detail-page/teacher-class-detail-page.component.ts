import { AcademicTranscriptUpdateDto } from './../../../core/models/academicTranscript/academicTranscriptUpdateDto';
import { AcademicTranscriptService } from 'src/app/core/services/academicTranscript.service';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/core/models/class';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ClassService } from 'src/app/core/services/class.service';
import { Children } from 'src/app/core/models/childrenDto/children';
import { AcademicTranscript } from 'src/app/core/models/academicTranscript/academicTranscript';

@Component({
  selector: 'app-teacher-class-detail-page',
  templateUrl: './teacher-class-detail-page.component.html',
  styleUrls: ['./teacher-class-detail-page.component.css']
})
export class TeacherClassDetailPageComponent implements OnInit {
  class : Class = {} as Class;
  listStudent: Children[] = [];
  listTrans: AcademicTranscript[] = [];
  constructor(private router: Router, private classService: ClassService, public helperDate :HelperDate, private academicTranscriptService: AcademicTranscriptService) {}
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    const classId = listUrl[listUrl.length - 1];
      this.classService.geClassById(classId).subscribe((res: ResponseDto) => {
        this.class = res.data;
      });
      this.academicTranscriptService.getTransByClassId(classId).subscribe((res: ResponseDto) => {
        this.listTrans = res.data;
      })
  }
  public updateTrans(event: any, transId: number) {
    const parentElement = event.parentElement;
    const listChild = parentElement.childNodes;
    const academicTranscriptUpdateDto: AcademicTranscriptUpdateDto = {} as AcademicTranscriptUpdateDto;

    const childQuiz1 = listChild[1].getElementsByTagName('input');
    const markQuiz1 = childQuiz1[0].value || 0;
    academicTranscriptUpdateDto.quiz1 = markQuiz1;

    const childQuiz2 = listChild[2].getElementsByTagName('input');
    const markQuiz2 = childQuiz2[0].value || 0;
    academicTranscriptUpdateDto.quiz2 = markQuiz2;

    const childMidterm = listChild[3].getElementsByTagName('input');
    const markMidterm = childMidterm[0].value || 0;
    academicTranscriptUpdateDto.midterm = markMidterm;

    const childFinal = listChild[4].getElementsByTagName('input');
    const markFinal = childFinal[0].value || 0;
    academicTranscriptUpdateDto.final = markFinal;

    this.academicTranscriptService.updateTrans(academicTranscriptUpdateDto, transId).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        location.reload();
      }
    })
  }
}
