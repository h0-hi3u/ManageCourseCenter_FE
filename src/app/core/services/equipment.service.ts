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
    constructor(private http: HttpClient) {}
    public getEquipmentByRoomId(roomId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetEquipmentByRoomId}?roomId=${roomId}`
        )
    }
}