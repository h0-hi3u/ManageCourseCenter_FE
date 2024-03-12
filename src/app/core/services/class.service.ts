import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class ClassService {
    private readonly urlGetClassByTeacherId = 'Class/get-class-teacher-by-id';
    constructor(private http: HttpClient) {}
    public getClassByTeacherId(teacherId: string, pageSize: number, pageIndex: number) :Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetClassByTeacherId}?teacherId=${teacherId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
}