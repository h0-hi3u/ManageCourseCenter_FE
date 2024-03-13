import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";
import { ManagerUpdateDto } from "../models/managerDto/managerUpdateDto";

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private readonly urlGetAllStaff = 'Manager/get-all-staff';
    private readonly urlGetStaffById = 'Manager/get-staff-id';
    private readonly urlUpdateStaffInformation = 'Manager/updateStaffInformation';
    private readonly urlSetStatusStaff = 'Manager/setStatusStaff';
    constructor(private http: HttpClient) {}
    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>( 
            `${environment.urlApi}/${this.urlGetAllStaff}`
        )
    }
    public getStaffById(staffId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetStaffById}?id=${staffId}`
        )
    } 
    public updateStaffInformation(staffId: string, managerUpdateDto: ManagerUpdateDto) : Observable<ResponseDto> {
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdateStaffInformation}?staffId=${staffId}`, managerUpdateDto
        )
    }
    public setStatusStaff(staffId: number, status: number) : Observable<ResponseDto> {
        return this.http.patch<ResponseDto>(
            `${environment.urlApi}/${this.urlSetStatusStaff}?staffId=${staffId}`, { status: `${status}`}
        )
    }
}