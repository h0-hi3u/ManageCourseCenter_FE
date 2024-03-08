import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private formBuilder: FormBuilder,
     private authService: AuthService,
      private router:Router) {}
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
        if(res.isSuccess) {
          this.router.navigate(['/children']);
        }
      })
    } else if(this.getForm.role.value == 'manager') {
      this.authService.loginFormManager(this.getForm.email.value || '', this.getForm.password.value || '').subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.router.navigate(['/manager']);
        }
      })
    } else if(this.getForm.role.value == 'teacher') {
      this.authService.loginForTeacher(this.getForm.email.value || '', this.getForm.password.value || '').subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.router.navigate(['/teacher']);
        }
      })
    }  else if(this.getForm.role.value == 'parent') {
      this.authService.loginForParent(this.getForm.email.value || '', this.getForm.password.value || '').subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.router.navigate(['/parent']);
        }
      })
    }
  }
}
