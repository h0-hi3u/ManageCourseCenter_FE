import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly urlLoginChildren = 'Child/get-child-username-password';
    private readonly urlLoginParent = 'Parent/get-parent-email-password';
    private readonly urlLoginManager = 'Manager/get-manager-email-password';
    private readonly urlLoginTeacher = 'Teacher/get-teacher-email-password';
    constructor(private http: HttpClient) {

    }
    public loginForChildren(email:string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginChildren}?username=${email}&password=${password}
        `)
    }
    public loginForParent(email: string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginParent}?email=${email}&password=${password}
        `)
    }

    public loginFormManager(email: string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginManager}?email=${email}&password=${password}
        `)
    }
    public loginForTeacher(email: string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginTeacher}?email=${email}&password=${password}
        `)
    }
}