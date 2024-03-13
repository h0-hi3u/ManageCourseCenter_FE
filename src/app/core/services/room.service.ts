import { RoomUpdateDto } from './../models/roomDto/roomUpdateStatusDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    private readonly urlGetAll = 'Room/get-all';
    private readonly urlGetById = 'Room/get-room-id';
    private readonly urlUpdateStatus = '';
    private readonly urlGetAllPaging = 'Room/get-all-room-paging';
    constructor(private http: HttpClient) {}

    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public getRoomById(roomId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetById}?id=${roomId}`
        )
    }

    public updateRoomStatus(roomUpdateDto: RoomUpdateDto) : Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdateStatus}`, roomUpdateDto
        )
    }
    public getAllPaging(pageSize: number, pageIndex: number) : Observable<ResponseDto>{
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAllPaging}?pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
}