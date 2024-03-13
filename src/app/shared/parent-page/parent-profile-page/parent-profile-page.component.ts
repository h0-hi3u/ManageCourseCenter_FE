import { ParentService } from './../../../core/services/parent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { HelperValidate } from 'src/app/core/helpers/helperValidate';
import { ChangePasswordDto } from 'src/app/core/models/changePasswordDto';
import { Parent } from 'src/app/core/models/parentDto/parent';
import { ParentUpdateDto } from 'src/app/core/models/parentDto/parentUpdateDto';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-parent-profile-page',
  templateUrl: './parent-profile-page.component.html',
  styleUrls: ['./parent-profile-page.component.css']
})
export class ParentProfilePageComponent implements OnInit{
  parent: Parent = {} as Parent;
  messageUpdate = '';
  parentId = localStorage.getItem('parentId') || '';
  messageChangePassword = '';
  constructor(
    private formBuilder: FormBuilder,
    private helperDate: HelperDate,
    private helperValidate: HelperValidate,
    private parentService: ParentService
  ){}
  updateParentForm = this.formBuilder.group({
    fullName: new FormControl(this.parent.fullName, Validators.required),
    email: new FormControl(this.parent.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.parent.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
    birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.parent.birthDay), [Validators.required]),
    gender: new FormControl(this.parent.gender, Validators.required),
  });
  ngOnInit(): void {
    const parentId = localStorage.getItem('parentId') || '';
      this.parentService.getParentById(parentId).subscribe((res: ResponseDto) => {
        this.parent = res.data;
        this.updateParentForm = this.formBuilder.group({
          fullName: new FormControl(this.parent.fullName, Validators.required),
          email: new FormControl(this.parent.email, [Validators.required, Validators.email]),
          phone: new FormControl(this.parent.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
          birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.parent.birthDay), [Validators.required]),
          gender: new FormControl(this.parent.gender, Validators.required),
        });
      });

  }
  get getForm() {
    return this.updateParentForm.controls;
  }
  public updateStaffInformation() {
    console.log("update");
    const parentUpdateDto: ParentUpdateDto = {} as ParentUpdateDto;
    parentUpdateDto.id = this.parent.id
    parentUpdateDto.fullName = this.getForm.fullName.value || '';
    parentUpdateDto.email = this.getForm.email.value || '';
    parentUpdateDto.phone = this.getForm.phone.value || '';
    parentUpdateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
    parentUpdateDto.gender = this.getForm.gender.value || 3;
    this.parentService.updateParent(parentUpdateDto).subscribe((res:ResponseDto) => {
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
    // const changePasswordDto : ChangePasswordDto = {} as ChangePasswordDto;
    // changePasswordDto.currentPassword = this.changePasswordForm.controls.currentPassword.value || '';
    // changePasswordDto.newPassword = this.changePasswordForm.controls.newPassword.value || '';
    // this.managerService.changPasswordStaff(this.staffId, changePasswordDto).subscribe((res: ResponseDto) => {
    //   if(res.isSuccess) {
    //     this.messageChangePassword = 'Change success';
    //   } else {
    //     this.messageChangePassword = 'Please check double check information and try again';
    //   }
    // })
  }
}
