import { ChangePasswordDto } from './../models/changePasswordDto';
import { TeacherUpdateDto } from './../models/teacherDto/teacherUpdateDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private readonly urlGetAll = 'Teacher/get-all';
    private readonly urlGetById = 'Teacher/get-teacher-id';
    private readonly urlUpdate = 'Teacher/update-teacher-by-Id';
    private readonly urlChangePassword = 'Teacher/changePassword';
    constructor(private http: HttpClient) {}

    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public getById(teacherId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetById}?id=${teacherId}`
        )
    }
    public updateTeacher(teacherId: number, teacherUpdateDto: TeacherUpdateDto) : Observable<ResponseDto> {
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdate}?teacherId=${teacherId}`, teacherUpdateDto
        )
    }
    public changePassword(teacherId: string, changePasswordDto: ChangePasswordDto) : Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlChangePassword}?teacherId=${teacherId}`, changePasswordDto
        )
    }
}