import { ChildrenService } from 'src/app/core/services/children.service';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Children } from 'src/app/core/models/childrenDto/children';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-update-children-page',
  templateUrl: './parent-update-children-page.component.html',
  styleUrls: ['./parent-update-children-page.component.css']
})
export class ParentUpdateChildrenPageComponent implements OnInit {
  children: Children = {} as Children;
  messageUpdateSuccess = '';
  messageUpdateFail = '';
  messageChangePasswordSuccess = '';
  messageChangePasswordFail = '';
  constructor(
    private formBuilder: FormBuilder,
    private helperDate: HelperDate,
    private childrenService: ChildrenService,
    private router: Router,
  ){}
  updateChildrenForm = this.formBuilder.group({
    fullName: new FormControl(this.children.fullName, Validators.required),
    username: new FormControl(this.children.username, [Validators.required, Validators.email]),
    birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.children.birthDay), [Validators.required]),
    gender: new FormControl(this.children.gender, Validators.required),
  });
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    const childrenId = listUrl[listUrl.length - 1];
      this.childrenService.getById(childrenId).subscribe((res: ResponseDto) => {
      this.children = res.data;
      this.updateChildrenForm = this.formBuilder.group({
        fullName: new FormControl(this.children.fullName, Validators.required),
        username: new FormControl(this.children.username.replace('@gmail.com',''), [Validators.required]),
        birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.children.birthDay), [Validators.required]),
        gender: new FormControl(this.children.gender, Validators.required),
      });
  })
  }
  get getForm() {
    return this.updateChildrenForm.controls;
  }
  public updateInformationChildren() {
    const updateChildren: Children = {} as Children;
    updateChildren.id = this.children.id;
    updateChildren.parentId = this.children.parentId;
    updateChildren.fullName = this.getForm.fullName.value || '';
    updateChildren.username = this.getForm.username.value + '@gmail.com';
    updateChildren.password = this.children.password;
    updateChildren.imgUrl = this.children.imgUrl;
    updateChildren.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
    updateChildren.gender = this.getForm.gender.value || 3;
    updateChildren.status = this.children.status;
    this.childrenService.updateChildren(updateChildren).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.messageUpdateSuccess = 'Update success';
      } else {
        this.messageUpdateFail = 'Some wrong. Please check information and try again!';
      }
    })
    
  }
}
