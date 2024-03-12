import { EquipmentActivityService } from './../../../core/services/equipmentActivity.service';
import { HelperDate } from './../../../core/helpers/helperDate';
import { Equipment } from './../../../core/models/equipmentDto/equipment';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { EquipmentActivity } from 'src/app/core/models/equipmentDto/equipmentActivity';

@Component({
  selector: 'app-staff-equipment-activity-page',
  templateUrl: './staff-equipment-activity-page.component.html',
  styleUrls: ['./staff-equipment-activity-page.component.css']
})
export class StaffEquipmentActivityPageComponent implements OnInit {
  listActivity : EquipmentActivity[] = []; 
  constructor(
    private equipmentActivityService: EquipmentActivityService,
    public helperDate: HelperDate
    ) {}
  ngOnInit(): void {
      this.equipmentActivityService.getAll().subscribe((res: ResponseDto) => {
        this.listActivity = res.data;
      })
  }
} 
