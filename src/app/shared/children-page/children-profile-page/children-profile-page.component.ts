import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChildrenService } from './../../../core/services/children.service';
import { Component, OnInit } from '@angular/core';
import { Children } from 'src/app/core/models/children';
import { HelperDate } from 'src/app/core/helpers/helperDate';
import { HelperValidate } from 'src/app/core/helpers/helperValidate';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-children-profile-page',
  templateUrl: './children-profile-page.component.html',
  styleUrls: ['./children-profile-page.component.css']
})
export class ChildrenProfilePageComponent implements OnInit{
  children: Children = {} as Children;
  messageUpdate = '';
  constructor(
    private childrenService: ChildrenService,
    public helperDate: HelperDate,
    private formBuilder: FormBuilder,
    private helperValidate : HelperValidate
    )
    {}
    updateChildrenFrom = this.formBuilder.group({
      fullName: new FormControl(this.children.fullName, Validators.required),
      email: new FormControl(this.children.username, [Validators.required, Validators.email]),
      birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.children.birthDay), [Validators.required]),
      gender: new FormControl(this.children.gender, Validators.required),
    });
  ngOnInit(): void {
      const childrenId = localStorage.getItem('childrenId') || '';
      this.childrenService.getById(childrenId).subscribe((res: ResponseDto) => {
        this.children = res.data;
        this.updateChildrenFrom = this.formBuilder.group({
          fullName: new FormControl(this.children.fullName, Validators.required),
          email: new FormControl(this.children.username, [Validators.required, Validators.email]),
          birthDay: new FormControl(this.helperDate.formatDateYearMonthDayDate(this.children.birthDay), [Validators.required]),
          gender: new FormControl(this.children.gender, Validators.required),
        });
      })
  }
  get getForm() {
    return this.updateChildrenFrom.controls;
  }
  public updateInformation() {
    
  }
}
