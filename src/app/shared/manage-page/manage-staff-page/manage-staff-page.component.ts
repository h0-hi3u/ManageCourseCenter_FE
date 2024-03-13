import { HelperDate } from 'src/app/core/helpers/helperDate';
import { StaffService } from './../../../core/services/staff.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/core/models/managerDto/manager';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-manage-staff-page',
  templateUrl: './manage-staff-page.component.html',
  styleUrls: ['./manage-staff-page.component.css']
})
export class ManageStaffPageComponent implements OnInit{
  listStaff: Manager[] = [];
  constructor(private staffService : StaffService, private router : Router, public helperDate: HelperDate) {}
  ngOnInit(): void {
    this.staffService.getAll().subscribe((res: ResponseDto) => {
      this.listStaff = res.data;
    })
  }
  public goToStaffDetail(staffId: number) {
    this.router.navigate([`/manager/staff-detail/${staffId}`]);
  }
  public setInactive(staffId: number) {
    this.staffService.setStatusStaff(staffId, 2).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        location.reload();
      } else {
        console.log("Set status staff fail!");
        
      }
    })
  }
  public setActive(staffId: number) {
    this.staffService.setStatusStaff(staffId, 1).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        location.reload();
      } else {
        console.log("Set status staff fail!");
        
      }
    })
  }
}
