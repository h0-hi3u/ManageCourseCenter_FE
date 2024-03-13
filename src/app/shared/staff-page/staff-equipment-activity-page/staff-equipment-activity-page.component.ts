import { EquipmentActivityService } from './../../../core/services/equipmentActivity.service';
import { HelperDate } from './../../../core/helpers/helperDate';
import { Equipment } from './../../../core/models/equipmentDto/equipment';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { EquipmentActivity } from 'src/app/core/models/equipmentDto/equipmentActivity';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-equipment-activity-page',
  templateUrl: './staff-equipment-activity-page.component.html',
  styleUrls: ['./staff-equipment-activity-page.component.css']
})
export class StaffEquipmentActivityPageComponent implements OnInit {
  listActivity : EquipmentActivity[] = []; 
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private equipmentActivityService: EquipmentActivityService,
    public helperDate: HelperDate,
    private router: Router
    ) {}
  ngOnInit(): void {
      this.movePage();
  }
  getArrayTotalPage(count: number) {
  const totalPage = Math.ceil(count/this.pageSize);
    for (let i = 1; i <= totalPage; i++) {
      this.arrayTotalPage.push(i);
    }
  }
  public movePage(currentPage?: number) {
    this.currentPageIndex = currentPage || this.currentPageIndex;
    this.arrayTotalPage = [];
    this.equipmentActivityService.getAllPaging(this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
      this.listActivity = res.data.data;
      this.getArrayTotalPage(res.data.totalRecords);
    });
  }
  public goToDetail(activityId: number) {
    this.router.navigate([`staff/detail/${activityId}`])
  }
} 
