import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router){

  }
  public goToHome() : void {
    this.router.navigate(['']);
  }
  public goToAbout(): void {
    this.router.navigate(['/about']);
  }
  public goToCourse() : void {
    this.router.navigate(['/courses']);
  }
  public goToContact(): void {
    this.router.navigate(['/contact']);
  }
}
