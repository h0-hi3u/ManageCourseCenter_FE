import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css']
})
export class ManagePageComponent {
  constructor(private router: Router) {}

  public logout() {
    localStorage.removeItem('managerId');
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
}
