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
    private readonly urlGetClassByChildrenId = 'Class/get-class-by-children-id';
    private readonly urlGetClassById = 'Class/get-class-id';
    constructor(private http: HttpClient) {}
    public getClassByTeacherId(teacherId: string, pageSize: number, pageIndex: number) :Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetClassByTeacherId}?teacherId=${teacherId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public getClassByChildrenId(childrenId: string, pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetClassByChildrenId}?childrenId=${childrenId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    } 
    public geClassById(classId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto> (
            `${environment.urlApi}/${this.urlGetClassById}?id=${classId}`
        )
    }
}