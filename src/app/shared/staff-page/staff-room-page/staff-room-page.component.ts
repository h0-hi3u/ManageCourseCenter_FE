import { Room } from 'src/app/core/models/roomDto/room';
import { RoomService } from './../../../core/services/room.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-staff-room-page',
  templateUrl: './staff-room-page.component.html',
  styleUrls: ['./staff-room-page.component.css']
})
export class StaffRoomPageComponent implements OnInit{
  listRoom: Room[] = [];
  currentPageIndex = 1;
  pageSize = 10;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  arrayTotalPage: number[] = [];
  constructor(
    private roomService: RoomService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.movePage();
  }
  public gotoDetailRoom(roomId: number) {
    this.router.navigate([`/staff/detail-room/${roomId}`]);
  }
  getArrayTotalPage(count: number) {
    
    const totalPage = Math.ceil(count/this.pageSize);
    console.log(totalPage);
    
      for (let i = 1; i <= totalPage; i++) {
        this.arrayTotalPage.push(i);
      }
    }
    public movePage(currentPage?: number) {
      this.currentPageIndex = currentPage || this.currentPageIndex;
      this.arrayTotalPage = [];
      const teacherId = localStorage.getItem('teacherId');
      this.roomService.getAllPaging(this.pageSize, this.currentPageIndex).subscribe((res: ResponseDto) => {
        this.listRoom = res.data.data;
        this.getArrayTotalPage(res.data.totalRecords);
      })
    }
}
