import { HelperValidate } from './../../../core/helpers/helperValidate';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Teacher } from 'src/app/core/models/teacherDto/teacher';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { TeacherUpdateDto } from 'src/app/core/models/teacherDto/teacherUpdateDto';
import { ChangePasswordDto } from 'src/app/core/models/changePasswordDto';

@Component({
  selector: 'app-teacher-detail-page',
  templateUrl: './teacher-detail-page.component.html',
  styleUrls: ['./teacher-detail-page.component.css']
})
export class TeacherDetailPageComponent implements OnInit{
  teacherId: string = '';
  teacher: Teacher = {} as Teacher;
  messageUpdate = '';
  messageChangePassword = '';
  constructor(
    private router: Router,
    private teacherService: TeacherService,
    public helperDate: HelperDate,
    private formBuilder: FormBuilder,
    private helperValidate : HelperValidate
    ) {}
    updateTeacherForm = this.formBuilder.group({
      fullName: new FormControl(this.teacher.fullName, Validators.required),
      email: new FormControl(this.teacher.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.teacher.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
      birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.teacher.birthDay), [Validators.required]),
      gender: new FormControl(this.teacher.gender, Validators.required),
    });
  ngOnInit(): void {
      this.teacherId = localStorage.getItem('teacherId') || '0';
      this.teacherService.getById(this.teacherId).subscribe((res : ResponseDto) => {
        this.teacher = res.data;
        this.updateTeacherForm = this.formBuilder.group({
          fullName: new FormControl(this.teacher.fullName, Validators.required),
          email: new FormControl(this.teacher.email, [Validators.required, Validators.email]),
          phone: new FormControl(this.teacher.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
          birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.teacher.birthDay), [Validators.required]),
          gender: new FormControl(this.teacher.gender, Validators.required),
        });
      });
  }
  
  get getForm() {
    return this.updateTeacherForm.controls;
  }
  public updateInformation() {
    console.log("update");
    const teacherUpdateDto = {} as TeacherUpdateDto;
    teacherUpdateDto.fullName = this.getForm.fullName.value || '';
    teacherUpdateDto.email = this.getForm.email.value || '';
    teacherUpdateDto.password = this.teacher.password;
    teacherUpdateDto.imgUrl = this.teacher.imgUrl;
    teacherUpdateDto.phone = this.getForm.phone.value || '';
    teacherUpdateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
    teacherUpdateDto.gender = this.getForm.gender.value || 3;
    teacherUpdateDto.role = 1;
    teacherUpdateDto.status = 1;
    this.teacherService.updateTeacher(this.teacher.id, teacherUpdateDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.messageUpdate = "Update success";
      } else {
        this.messageUpdate = "Please reload and try again!";
      }
    })
  }
  changePasswordForm = this.formBuilder.group({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  })
  public changePassword() {
    const changePasswordDto : ChangePasswordDto = {} as ChangePasswordDto;
    changePasswordDto.currentPassword = this.changePasswordForm.controls.currentPassword.value || '';
    changePasswordDto.newPassword = this.changePasswordForm.controls.newPassword.value || '';
    this.teacherService.changePassword(this.teacherId, changePasswordDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.messageChangePassword = 'Change success';
      } else {
        this.messageChangePassword = 'Please check double check information and try again';
      }
    })
  }
}
