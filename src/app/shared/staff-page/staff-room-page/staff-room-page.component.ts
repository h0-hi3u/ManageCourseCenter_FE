import { Room } from 'src/app/core/models/room';
import { RoomService } from './../../../core/services/room.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-staff-room-page',
  templateUrl: './staff-room-page.component.html',
  styleUrls: ['./staff-room-page.component.css']
})
export class StaffRoomPageComponent implements OnInit{
  listRoom: Room[] = [];

  constructor(private roomService: RoomService) {}
  ngOnInit(): void {
      this.roomService.getAll().subscribe((res:ResponseDto) => {
        this.listRoom = res.data;
      })
  }
}
