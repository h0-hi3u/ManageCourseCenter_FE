import { RoomUpdateDto } from './../../../core/models/roomDto/roomUpdateStatusDto';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/core/models/equipmentDto/equipment';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Room } from 'src/app/core/models/roomDto/room';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-staff-detail-room-page',
  templateUrl: './staff-detail-room-page.component.html',
  styleUrls: ['./staff-detail-room-page.component.css'],
})
export class StaffDetailRoomPageComponent implements OnInit {
  room: Room = {} as Room;
  listEquip: Equipment[] = [];
  messageUpdate = '';
  constructor(private router: Router,
     private roomService: RoomService,
     private equipmentService: EquipmentService,
     private formBuilder: FormBuilder) {}
     updateStatusForm = this.formBuilder.group({
      roomId: new FormControl(this.room.id, [Validators.required]),
      status: new FormControl(this.room.status, [Validators.required])
     })
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    const roomId = listUrl[listUrl.length - 1];
    this.roomService.getRoomById(roomId).subscribe((res: ResponseDto) => {
      this.room = res.data;
    });
    this.equipmentService.getEquipmentByRoomId(roomId).subscribe((res: ResponseDto) => { 
      this.listEquip = res.data;
    })
    this.updateStatusForm = this.formBuilder.group({
      roomId: new FormControl(this.room.id, [Validators.required]),
      status: new FormControl(this.room.status, [Validators.required])
     })
  }
  public submitForm() {
    const roomUpdateDto: RoomUpdateDto = {} as RoomUpdateDto;
    roomUpdateDto.roomId = this.updateStatusForm.controls.roomId.value || 0;
    roomUpdateDto.status = this.updateStatusForm.controls.status.value || 0;
    this.roomService.updateRoomStatus(roomUpdateDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.messageUpdate = 'Update success'
      } else {
        this.messageUpdate = "Some wrong. Please try again!";
      }
    })
  }
}
