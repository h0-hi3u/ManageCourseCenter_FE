import { HelperDate } from './../../../core/helpers/helperDate';
import { ReportService } from './../../../core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-teacher-report-page',
  templateUrl: './teacher-report-page.component.html',
  styleUrls: ['./teacher-report-page.component.css']
})
export class TeacherReportPageComponent implements OnInit{
  listReport: EquipmentReport[] = [];
  constructor(
    private reportService: ReportService,
    public helperDate: HelperDate,
    private router: Router
    ) {}
  ngOnInit(): void {
    const teacherId = localStorage.getItem('teacherId');
      this.reportService.getReportByTeacherId(parseInt(teacherId || '0'), 5, 1).subscribe((res: ResponseDto) => {
        this.listReport = res.data.data;
      })
  }
  public goToCreateReport() {
    this.router.navigate(['teacher/create-report']);
  }
}
