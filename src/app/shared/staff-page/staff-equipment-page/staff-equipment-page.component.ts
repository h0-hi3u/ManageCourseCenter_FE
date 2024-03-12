import { EquipmentService } from 'src/app/core/services/equipment.service';
import { Equipment } from './../../../core/models/equipmentDto/equipment';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-staff-equipment-page',
  templateUrl: './staff-equipment-page.component.html',
  styleUrls: ['./staff-equipment-page.component.css']
})
export class StaffEquipmentPageComponent implements OnInit {
  listEquip: Equipment[] = [];
  constructor(
    private equipmentService: EquipmentService
  ) {}
  ngOnInit(): void {
      this.equipmentService.getAll().subscribe((res: ResponseDto) => {
        this.listEquip = res.data;
      })
  }
}
