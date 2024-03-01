import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";
@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private readonly urlGetAll = 'Course/get-all';
    private readonly urlDetail = 'Course/get-course-id';
    constructor(private http: HttpClient) {}

    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public getDetailCourse(id: number): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlDetail}?id=${id}`
        )
    }
}