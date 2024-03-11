import { Teacher } from 'src/app/core/models/teacher';
import { TeacherService } from './../../../core/services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teacher-page',
  templateUrl: './manage-teacher-page.component.html',
  styleUrls: ['./manage-teacher-page.component.css']
})
export class ManageTeacherPageComponent implements OnInit{
  listTeacher: Teacher[] = [];
  constructor(
    private teacherService: TeacherService,
    private router: Router,
    ) {}
  ngOnInit(): void {
      this.teacherService.getAll().subscribe((res: ResponseDto) => {
        this.listTeacher = res.data;
      })
  }
  public goToTeacherDetail(teacherId: number) {
    this.router.navigate([`/manager/teacher-detail/${teacherId}`]);
  }
}
