import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { EquipmentReportService } from './../../../core/services/equipmentReport.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-staff-report-page',
  templateUrl: './staff-report-page.component.html',
  styleUrls: ['./staff-report-page.component.css']
})
export class StaffReportPageComponent implements OnInit{
  listReport: EquipmentReport[] = [];
  constructor(private equipmentReportService: EquipmentReportService) {}
  ngOnInit(): void {
      this.equipmentReportService.getAll().subscribe((res: ResponseDto) => {
        this.listReport = res.data;
      })
  }
}
