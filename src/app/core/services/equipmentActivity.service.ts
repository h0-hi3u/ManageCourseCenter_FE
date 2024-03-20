import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentActivityService {
    private readonly urlGetAll = 'EquipmentActivity/get-all';
    private readonly urlGetAllPaging = 'EquipmentActivity/get-all-equipment-paging';
    private readonly urlChange = 'EquipmentActivity/change-equipment';
    constructor(private http: HttpClient) {

    }
    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public getAllPaging(pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAllPaging}?pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public changeActivity(oldId: string, newId: string, managerId: string) : Observable<ResponseDto>{
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlChange}?oldEquipmentId=${oldId}&newEquipmentId=${newId}&managerId=${managerId}`, ''
        )
    }
}