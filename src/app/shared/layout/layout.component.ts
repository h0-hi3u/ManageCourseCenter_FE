import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  active: string = '';
  constructor(private router: Router){

  }
  ngOnInit(): void {
      const listUrl = this.router.url.split('/');
      this.active = listUrl[1];
  }
  public goToHome() : void {
    this.active = '';
    this.router.navigate(['']);
  }
  public goToAbout(): void {
    this.active = 'about';
    this.router.navigate(['/about']);
  }
  public goToCourse() : void {
    this.active = 'courses';
    this.router.navigate(['/courses']);
  }
  public goToContact(): void {
    this.active = 'contact';
    this.router.navigate(['/contact']);
  }
  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
  public goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
