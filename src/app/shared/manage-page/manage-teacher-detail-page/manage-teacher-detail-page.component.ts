import { HelperDate } from './../../../core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Teacher } from 'src/app/core/models/teacherDto/teacher';
import { TeacherService } from 'src/app/core/services/teacher.service';

@Component({
  selector: 'app-manage-teacher-detail-page',
  templateUrl: './manage-teacher-detail-page.component.html',
  styleUrls: ['./manage-teacher-detail-page.component.css']
})
export class ManageTeacherDetailPageComponent implements OnInit {
  teacherId: string = '';
  teacher: Teacher = {} as Teacher;
  constructor(
    private router: Router,
    private teacherService: TeacherService,
    public helperDate: HelperDate
    ) {}
  ngOnInit(): void {
      const listUrl = this.router.url.split('/');
      this.teacherId = listUrl[listUrl.length - 1];
      this.teacherService.getById(this.teacherId).subscribe((res : ResponseDto) => {
        this.teacher = res.data;
      })
  }
}
