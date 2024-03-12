import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    private readonly urlGetStaffById = 'Manager/get-staff-id';
    constructor(private http: HttpClient) {}
    public getStaffById(staffId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetStaffById}?id=${staffId}`
        )
    }
}