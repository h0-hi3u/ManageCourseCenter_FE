import { ChildrenClassCreateDto } from './../../../core/models/childrenClass/childrenClassCreateDto';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildrenClassService } from './../../../core/services/childrenClass.service';
import { Component, OnInit } from '@angular/core';
import { Children } from 'src/app/core/models/childrenDto/children';
import { Class } from 'src/app/core/models/class';
import { ChildrenService } from 'src/app/core/services/children.service';
import { ClassService } from 'src/app/core/services/class.service';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Course } from 'src/app/core/models/coures';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-parent-register-course-page',
  templateUrl: './parent-register-course-page.component.html',
  styleUrls: ['./parent-register-course-page.component.css']
})
export class ParentRegisterCoursePageComponent implements OnInit {
  courseId: string = '';
  listChild: Children[] = [];
  listClass: Class[] = [];
  course: Course = {} as Course;
  registerSuccess = '';
  registerFail = '';
  constructor(
    private courseService: CourseService,
    private classService: ClassService,
    private childrenService: ChildrenService,
    private childrenClassService: ChildrenClassService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    const parentId = localStorage.getItem('parentId') || '';
    this.courseId = listUrl[listUrl.length - 1];
    this.courseService.getDetailCourse(parseInt(this.courseId)).subscribe((res: ResponseDto) => {
      this.course = res.data;
    })
    this.childrenService.getNotEnrolled(parentId, this.courseId).subscribe((res: ResponseDto) => {
      this.listChild = res.data;
    });
    this.classService.getClassByCourseId(this.courseId).subscribe((res: ResponseDto) => {
      this.listClass = res.data;
    })
  }
  childrenClassForm = this.formBuilder.group({
    classId: new FormControl(null, [Validators.required]),
    childrenId: new FormControl(null, [Validators.required])
  })
  get getFrom(){
    return this.childrenClassForm.controls;
  } 
   public submit() {
      const childrenClassCreateDto: ChildrenClassCreateDto = {} as ChildrenClassCreateDto;
      childrenClassCreateDto.classId = parseInt(this.getFrom.classId.value || '0');
      childrenClassCreateDto.childrenId = parseInt(this.getFrom.childrenId.value || '0');
      this.childrenClassService.createChildrenClass(childrenClassCreateDto).subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.registerSuccess = "Register success";
        } else {
          this.registerFail = "Some wrong. Please information and try again!";
        }
      })

  }
}
