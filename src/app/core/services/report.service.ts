import { EquipmentReportCreateDto } from 'src/app/core/models/equipmentDto/equipmentReportCreateDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    private readonly urlGetReportByTeacherId = 'EquipmentReport/get-report-by-teacher-id';
    private readonly urlCreateReport = 'EquipmentReport/create-equipment-report';
    constructor(private http: HttpClient) {}

    public getReportByTeacherId(teacherId: number, pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetReportByTeacherId}?teacherId=${teacherId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public createReport(equipmentReportCreateDto: EquipmentReportCreateDto): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlCreateReport}`, equipmentReportCreateDto
        )
    }
}