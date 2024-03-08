import { ParentService } from './../../core/services/parent.service';
import { HelperValidate } from './../../core/helpers/helperValidate';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ParentCreateDto } from 'src/app/core/models/parentDto/parentCreateDto';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
    constructor(
      private formBuilder: FormBuilder,
       private helperValidate: HelperValidate,
       private parentService: ParentService) {}
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
      parentCreateDto.phone = this.getForm.phone.value || '';
      parentCreateDto.birthDay = new Date(this.getForm.birthDay.value || '2024-10-10');
      parentCreateDto.gender = parseInt(this.getForm.gender.value || '0');
      parentCreateDto.role = 1;
      parentCreateDto.status = 1;
      console.log(parentCreateDto);
      
      this.parentService.createParent(parentCreateDto).subscribe((res: ResponseDto) => {
        console.log(res);
      })
    }
}
