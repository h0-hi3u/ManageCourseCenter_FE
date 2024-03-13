import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Equipment } from './../../../core/models/equipmentDto/equipment';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-staff-equipment-page',
  templateUrl: './staff-equipment-page.component.html',
  styleUrls: ['./staff-equipment-page.component.css']
})
export class StaffEquipmentPageComponent implements OnInit {
  listEquip: Equipment[] = [];
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private equipmentService: EquipmentService
  ) {}
  ngOnInit(): void {
      this.movePage();
  }
  getArrayTotalPage(count: number) {
    console.log(count);
    
  const totalPage = Math.ceil(count/this.pageSize);
  console.log(totalPage);
  
    for (let i = 1; i <= totalPage; i++) {
      this.arrayTotalPage.push(i);
    }
  }
  public movePage(currentPage?: number) {
    this.currentPageIndex = currentPage || this.currentPageIndex;
    this.arrayTotalPage = [];
    this.equipmentService.getAllPaging(this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
      this.listEquip = res.data.data;
      this.getArrayTotalPage(res.data.totalRecords);
    });
  }
}
