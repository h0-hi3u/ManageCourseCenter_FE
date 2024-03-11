import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent {
  constructor(private router: Router) {}
  public logout() {
    localStorage.removeItem('staffId');
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
}
