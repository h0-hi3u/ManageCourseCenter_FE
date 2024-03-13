import { DatePipe } from '@angular/common';
import { RoomService } from './../../../core/services/room.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Room } from 'src/app/core/models/roomDto/room';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Equipment } from 'src/app/core/models/equipmentDto/equipment';
import { EquipmentReport } from 'src/app/core/models/equipmentDto/equipmentReport';
import { EquipmentReportCreateDto } from 'src/app/core/models/equipmentDto/equipmentReportCreateDto';
import { ReportService } from 'src/app/core/services/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-create-report-page',
  templateUrl: './teacher-create-report-page.component.html',
  styleUrls: ['./teacher-create-report-page.component.css']
})
export class TeacherCreateReportPageComponent implements OnInit{
  listRoom: Room[] = [];
  listEquipment: Equipment[] = [];
  messageCreate: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private equipmentService: EquipmentService,
    private reportService: ReportService,
    private router: Router
    ) {}
  createReportFrom = this.formBuilder.group({
    roomId: new FormControl('', Validators.required),
    equipmentId: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
      this.roomService.getAll().subscribe((res: ResponseDto) => {
        this.listRoom = res.data;
      })
  }
  get getForm() {
    return this.createReportFrom.controls;
  }
  public getEquipment(element: any) {
    const a = element as HTMLSelectElement;
    const roomId = parseInt(a.value);
    this.equipmentService.getEquipmentByRoomId(a.value).subscribe((res: ResponseDto) => {
      this.listEquipment = res.data;
    })
    
  }
  public submit() {
    const report: EquipmentReportCreateDto = {} as EquipmentReportCreateDto;
    report.roomId = parseInt(this.getForm.roomId.value || '0');
    report.equipmentId = parseInt(this.getForm.equipmentId.value || '0');
    report.description = this.getForm.description.value || '';
    report.sendTime = new Date();
    report.status = 1;
    const teacherId = localStorage.getItem('teacherId');
    report.senderId = parseInt(teacherId || '0');
    this.reportService.createReport(report).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.router.navigate(['/teacher/report']);
      } else {
        this.messageCreate = 'Something wrong. Please try again!';
      }
    })
  }
}
