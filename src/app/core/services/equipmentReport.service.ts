import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EquipmentReportService {
    private readonly urlGetAllEquipmentReport = 'EquipmentReport/get-all-equip-report';
    private readonly urlGetAllPaging = 'EquipmentReport/get-all-equipment-paging';
    constructor(private http: HttpClient) {}
    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto> (
            `${environment.urlApi}/${this.urlGetAllEquipmentReport}`
        )
    }
    public getAllPaging(pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAllPaging}?pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
}