import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('manager'),
  });
  get getForm() {
    return this.loginForm.controls;
  }
  public submit() {
    if(this.getForm.role.value == 'children') {
      this.authService.loginForChildren(this.getForm.email.value || '', this.getForm.password.value || '').subscribe((res: ResponseDto) => {
        console.log(res.data);
      })
    } else if(this.getForm.role.value == 'manager') {

    } else if(this.getForm.role.value == 'teacher') {

    }  else if(this.getForm.role.value == 'teacher') {

    }
  }
}
