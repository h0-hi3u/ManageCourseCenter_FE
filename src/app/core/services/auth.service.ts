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
    constructor(private http: HttpClient) {

    }
    public loginForChildren(email:string, password: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`
            ${environment.urlApi}/${this.urlLoginChildren}?username=${email}&password=${password}
        `)
    }
}