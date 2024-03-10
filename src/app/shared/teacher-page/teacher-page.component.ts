import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent {
  constructor(private router: Router) {}

  public logout() {
    localStorage.removeItem('teacherId');
    localStorage.removeItem('access_token');
    this.router.navigate([]);
  }
} 
