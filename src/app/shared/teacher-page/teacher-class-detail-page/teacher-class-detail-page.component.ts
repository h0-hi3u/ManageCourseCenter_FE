import { HelperDate } from 'src/app/core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/core/models/class';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ClassService } from 'src/app/core/services/class.service';
import { Children } from 'src/app/core/models/childrenDto/children';

@Component({
  selector: 'app-teacher-class-detail-page',
  templateUrl: './teacher-class-detail-page.component.html',
  styleUrls: ['./teacher-class-detail-page.component.css']
})
export class TeacherClassDetailPageComponent implements OnInit {
  class : Class = {} as Class;
  listStudent: Children[] = [];
  constructor(private router: Router, private classService: ClassService, public helperDate :HelperDate) {}
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    const classId = listUrl[listUrl.length - 1];
      this.classService.geClassById(classId).subscribe((res: ResponseDto) => {
        this.class = res.data;
      });
  }
}
