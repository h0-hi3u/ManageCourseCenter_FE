import { HelperDate } from './../../../core/helpers/helperDate';
import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { EquipmentReportService } from './../../../core/services/equipmentReport.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-report-page',
  templateUrl: './staff-report-page.component.html',
  styleUrls: ['./staff-report-page.component.css'],
})
export class StaffReportPageComponent implements OnInit {
  listReport: EquipmentReport[] = [];
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private equipmentReportService: EquipmentReportService,
    public helperDate: HelperDate,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.movePage();
  }
  getArrayTotalPage(count: number) {
    const totalPage = Math.ceil(count / this.pageSize);
    for (let i = 1; i <= totalPage; i++) {
      this.arrayTotalPage.push(i);
    }
  }
  public movePage(currentPage?: number) {
    this.currentPageIndex = currentPage || this.currentPageIndex;
    this.arrayTotalPage = [];
    this.equipmentReportService
      .getAllPaging(this.pageSize, this.currentPageIndex)
      .subscribe((res: ResponseDto) => {
        this.listReport = res.data.data;
        this.getArrayTotalPage(res.data.totalRecords);
      });
  }

  public closeReport(reportId: number) {
    console.log('close');
    
    this.equipmentReportService
      .closeEquipmentReport(reportId)
      .subscribe((res: ResponseDto) => {
        if (res.isSuccess) {
          location.reload();
        } else {
          console.log('error');
        }
      });
  }
}
