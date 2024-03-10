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
    private readonly urlLoginManager = 'Manager/get-manager-by-email-password';
    private readonly urlLoginTeacher = 'Teacher/get-teacher-email-password';
    private readonly urlLoginAdmin = 'Manager/get-admin-username-password';
    private readonly urlLoginStaff = 'Manager/get-staff-username-password';
    constructor(private http: HttpClient) {

    }
    public login(email: string, password: string, role: string): Observable<ResponseDto> {
        switch (role) {
            case 'manage':
                return this.loginFormManager(email, password);
            case 'admin':
                return this.loginForAdmin(email, password);
            case 'staff':
                return this.loginForStaff(email, password);
            case 'children':
                return this.loginForChildren(email, password);
            case 'parent':
                return this.loginForParent(email, password);
            default:
                return this.loginForTeacher(email, password);
        } 
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
    public loginForAdmin(email: string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginAdmin}?email=${email}&password=${password}
        `)
    }
    public loginForStaff(email: string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginStaff}?email=${email}&password=${password}
        `)
    }
}