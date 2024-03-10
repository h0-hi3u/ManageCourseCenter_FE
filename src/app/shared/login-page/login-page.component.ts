import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  messageLogin: string = '';
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('manager'),
  });
  get getForm() {
    return this.loginForm.controls;
  }
  public submit() {
    if (this.getForm.role.value == 'children') {
      this.authService
        .loginForChildren(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('childrenId', res.data.id);
            this.router.navigate(['/children']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    } else if (this.getForm.role.value == 'manager') {
      this.authService
        .loginFormManager(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('managerId', res.data.id);
            this.router.navigate(['/manager']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    } else if (this.getForm.role.value == 'admin') {
      this.authService
        .loginForAdmin(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('adminId', res.data.id);
            this.router.navigate(['/admin']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    } else if (this.getForm.role.value == 'staff') {
      this.authService
        .loginForStaff(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('staffId', res.data.id);
            this.router.navigate(['/staff']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    } else if (this.getForm.role.value == 'teacher') {
      this.authService
        .loginForTeacher(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('teacherId', res.data.id);
            this.router.navigate(['/teacher']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    } else if (this.getForm.role.value == 'parent') {
      this.authService
        .loginForParent(
          this.getForm.email.value || '',
          this.getForm.password.value || ''
        )
        .subscribe((res: ResponseDto) => {
          if (res.isSuccess) {
            localStorage.setItem('parentId', res.data.id);
            this.router.navigate(['/parent']);
          } else {
            this.messageLogin = 'Incorrect password or email!';
          }
        });
    }
  }
}
