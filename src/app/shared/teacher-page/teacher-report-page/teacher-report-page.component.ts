import { HelperDate } from './../../../core/helpers/helperDate';
import { ReportService } from './../../../core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-report-page',
  templateUrl: './teacher-report-page.component.html',
  styleUrls: ['./teacher-report-page.component.css']
})
export class TeacherReportPageComponent implements OnInit{
  listReport: EquipmentReport[] = [];
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private reportService: ReportService,
    public helperDate: HelperDate,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.movePage();
  }
  public goToCreateReport() {
    this.router.navigate(['teacher/create-report']);
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
      const teacherId = localStorage.getItem('teacherId');
      this.reportService.getReportByTeacherId(parseInt(teacherId || '0'), this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
        
        this.listReport = res.data.data;
        console.log(this.listReport);
        this.getArrayTotalPage(res.data.totalRecords);
      })
    }
}
