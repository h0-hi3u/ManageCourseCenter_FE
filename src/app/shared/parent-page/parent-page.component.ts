import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css'],
})
export class ParentPageComponent {
  constructor(private router: Router) {}
  public logout() {
    localStorage.removeItem('parentId');
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
}
