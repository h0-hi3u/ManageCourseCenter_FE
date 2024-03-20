import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {
    private readonly urlGetEquipmentByRoomId = 'Equipment/get-equipment-by-room-id';
    private readonly urlGetAllEquipment = 'Equipment/get-all';
    private readonly urlGetAllPaging = 'Equipment/get-equipment-all-paging';
    private readonly urlGetEquipmentType = 'Equipment/get-equipment-type-and-status-availalbe';

    constructor(private http: HttpClient) {}
    public getEquipmentByRoomId(roomId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetEquipmentByRoomId}?roomId=${roomId}`
        )
    }
    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAllEquipment}`
        )
    }
    public getAllPaging(pageSize: number, pageIndex: number) : Observable<ResponseDto>{
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAllPaging}?pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public getEquipmentType(type: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetEquipmentType}?type=${type}`
        )
    }

}