import { HelperDate } from './../../../core/helpers/helperDate';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/core/services/staff.service';
import { Manager } from 'src/app/core/models/managerDto/manager';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-manage-staff-detail-page',
  templateUrl: './manage-staff-detail-page.component.html',
  styleUrls: ['./manage-staff-detail-page.component.css']
})
export class ManageStaffDetailPageComponent implements OnInit{
  staffId: string = '';
  staff: Manager = {} as Manager;
  constructor(
    private router: Router,
    private staffService: StaffService,
    public helperDate: HelperDate
    ) {}
  ngOnInit(): void {
      const listUrl = this.router.url.split('/');
      this.staffId = listUrl[listUrl.length - 1];
      this.staffService.getStaffById(this.staffId).subscribe((res : ResponseDto) => {
        this.staff = res.data;
      })
  }
}
