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
}