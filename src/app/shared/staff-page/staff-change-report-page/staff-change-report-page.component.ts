import { EquipmentActivityService } from './../../../core/services/equipmentActivity.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { ReportService } from './../../../core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Equipment } from 'src/app/core/models/equipmentDto/equipment';

@Component({
  selector: 'app-staff-change-report-page',
  templateUrl: './staff-change-report-page.component.html',
  styleUrls: ['./staff-change-report-page.component.css']
})
export class StaffChangeReportPageComponent implements OnInit{
  report: EquipmentReport = {} as EquipmentReport;
  reportId: string = '';
  listEquip: Equipment[] = [];
  messageFail = '';
  constructor(
    private reportService: ReportService,
     private router: Router, 
     private equipmentService: EquipmentService,
      private formBuilder: FormBuilder,
      private equipmentActivityService: EquipmentActivityService) {}
  changeFrom = this.formBuilder.group({
    oldId: new FormControl(0, [Validators.required]),
    newId: new FormControl(null, [Validators.required])
  })
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    this.reportId = listUrl[listUrl.length - 1];
      this.reportService.getReportById(parseInt(this.reportId)).subscribe((res: ResponseDto) => {
        this.report = res.data;
        this.changeFrom = this.formBuilder.group({
          oldId: new FormControl(this.report.equipment.id, [Validators.required]),
          newId: new FormControl(null, [Validators.required])
        })
        this.equipmentService.getEquipmentType(this.report.equipment.type).subscribe((res: ResponseDto) => {
          this.listEquip = res.data;
        })
      });
  }
  public submit() {
    if(this.changeFrom.invalid) {
      this.changeFrom.markAllAsTouched();
      return;
    }
    else {
      const oldId = this.changeFrom.controls.oldId.value?.toString() || '';
      const newID = this.changeFrom.controls.newId.value || '';
      const managerId = localStorage.getItem('staffId') || '';
      this.equipmentActivityService.changeActivity(oldId, newID, managerId).subscribe((res: ResponseDto) => {
        if(res.isSuccess) {
          this.router.navigate(['/staff']);
        } else {
          this.messageFail = "Some wrong. Please check information and try again!";
        }
      })
    }
  }
  
}
