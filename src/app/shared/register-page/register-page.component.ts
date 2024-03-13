import { ParentService } from './../../core/services/parent.service';
import { HelperValidate } from './../../core/helpers/helperValidate';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ParentCreateDto } from 'src/app/core/models/parentDto/parentCreateDto';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  messageCreate = '';
    constructor(
      private formBuilder: FormBuilder,
       private helperValidate: HelperValidate,
       private parentService: ParentService,
       private router: Router) {}
    registerForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        this.helperValidate.phoneNumberValidator
      ]),
      birthDay: new FormControl(null, [Validators.required]),
      gender: new FormControl('1', [Validators.required]),
    })
    get getForm() {
      return this.registerForm.controls;
    }
    public register() {
      let parentCreateDto = {} as ParentCreateDto;
      parentCreateDto.fullName = this.getForm.fullName.value || '';
      parentCreateDto.email = this.getForm.email.value || '';
      parentCreateDto.password = this.getForm.password.value || '';
      parentCreateDto.imgUrl = 'url_img';
      parentCreateDto.phone = this.getForm.phone.value || '';
      parentCreateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
      parentCreateDto.gender = parseInt(this.getForm.gender.value || '0');
      parentCreateDto.role = 1;
      parentCreateDto.status = 1;
      
      this.parentService.createParent(parentCreateDto).subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.messageCreate = 'Register success. Please go to login!';
        } else {
          this.messageCreate = 'Some wrong. Please try again!';
        }
      })
    }
}
