import { ChildrenService } from 'src/app/core/services/children.service';
import { ChildrenCreateDto } from './../../../core/models/childrenDto/childrenCreateDto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-create-children-page',
  templateUrl: './parent-create-children-page.component.html',
  styleUrls: ['./parent-create-children-page.component.css']
})
export class ParentCreateChildrenPageComponent {
  massageCreate = '';
  constructor(private formBuilder: FormBuilder, private childrenService: ChildrenService, private router: Router){}
  createChildrenForm = this.formBuilder.group({
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    birthDay: new FormControl(null, [Validators.required]),
    gender: new FormControl('1', [Validators.required])
  })
  get getForm(){
    return this.createChildrenForm.controls;
  }

  public submitCreate() {
    console.log("Submit");
    const childrenCreateDto: ChildrenCreateDto = {} as ChildrenCreateDto;
    const parentId = localStorage.getItem('parentId') || '0';
    childrenCreateDto.parentId = parseInt(parentId);
    childrenCreateDto.fullName = this.getForm.fullName.value || '';
    childrenCreateDto.username = this.getForm.username.value + "@gmail.com";
    childrenCreateDto.password = this.getForm.password.value || '';
    childrenCreateDto.imgUrl = "img_url";
    childrenCreateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
    childrenCreateDto.gender = parseInt(this.getForm.gender.value || '0');
    childrenCreateDto.role = 1;
    childrenCreateDto.status = 1;
    console.log(childrenCreateDto);
    this.childrenService.createChildren(childrenCreateDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.router.navigate(["/parent"]);
      } else {
        this.massageCreate = "Some wrong. Please check information and try again!"
      }
    })    
  }
}
