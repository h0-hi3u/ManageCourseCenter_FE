import { StaffService } from 'src/app/core/services/staff.service';
import { ManagerUpdateDto } from './../../../core/models/managerDto/managerUpdateDto';
import { HelperValidate } from './../../../core/helpers/helperValidate';
import { HelperDate } from './../../../core/helpers/helperDate';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Manager } from 'src/app/core/models/managerDto/manager';
import { ManagerService } from './../../../core/services/manager.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ChangePasswordDto } from 'src/app/core/models/changePasswordDto';

@Component({
  selector: 'app-staff-profile-page',
  templateUrl: './staff-profile-page.component.html',
  styleUrls: ['./staff-profile-page.component.css']
})
export class StaffProfilePageComponent implements OnInit{
  staff: Manager = {} as Manager;
  messageUpdate = '';
  staffId = localStorage.getItem('staffId') || '';
  messageChangePassword = '';
   constructor(
    private managerService: ManagerService,
    private formBuilder: FormBuilder,
    private helperDate: HelperDate,
    private helperValidate: HelperValidate,
    private staffService: StaffService
    ) {}
    updateStaffForm = this.formBuilder.group({
      fullName: new FormControl(this.staff.fullName, Validators.required),
      email: new FormControl(this.staff.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.staff.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
      birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.staff.birthDay), [Validators.required]),
      gender: new FormControl(this.staff.gender, Validators.required),
    });
   ngOnInit(): void {
      this.managerService.getStaffById(this.staffId).subscribe((res: ResponseDto) => {
        this.staff = res.data;
        this.updateStaffForm = this.formBuilder.group({
          fullName: new FormControl(this.staff.fullName, Validators.required),
          email: new FormControl(this.staff.email, [Validators.required, Validators.email]),
          phone: new FormControl(this.staff.phone, [Validators.required, this.helperValidate.phoneNumberValidator]),
          birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.staff.birthDay), [Validators.required]),
          gender: new FormControl(this.staff.gender, Validators.required),
        });
      })
   }
   get getForm() {
    return this.updateStaffForm.controls;
  }
  public updateStaffInformation() {
    console.log("update");
    const managerUpdateDto: ManagerUpdateDto = {} as ManagerUpdateDto;
    managerUpdateDto.fullName = this.getForm.fullName.value || '';
    managerUpdateDto.email = this.getForm.email.value || '';
    managerUpdateDto.password = this.staff.password;
    managerUpdateDto.imgUrl = this.staff.imgUrl;
    managerUpdateDto.phone = this.getForm.phone.value || '';
    managerUpdateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
    managerUpdateDto.gender = this.getForm.gender.value || 3;
    this.staffService.updateStaffInformation(this.staffId, managerUpdateDto).subscribe((res:ResponseDto) => {
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
    this.managerService.changPasswordStaff(this.staffId, changePasswordDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.messageChangePassword = 'Change success';
      } else {
        this.messageChangePassword = 'Please check double check information and try again';
      }
    })
  }
}
