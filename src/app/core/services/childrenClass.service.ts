import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";
import { ChildrenClassCreateDto } from "../models/childrenClass/childrenClassCreateDto";

@Injectable({
    providedIn: 'root'
})
export class ChildrenClassService {
    private readonly urlCreateChildrenClass = 'ChildrenClass/create-children-class';
    constructor(private http : HttpClient) {
        
    }
    public createChildrenClass(childrenClassCreateDto: ChildrenClassCreateDto) : Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlCreateChildrenClass}`, childrenClassCreateDto
        )
    }
}