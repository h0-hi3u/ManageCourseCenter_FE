import { ChildrenCreateDto } from './../models/childrenDto/childrenCreateDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";
import { Children } from '../models/childrenDto/children';

@Injectable({
    providedIn: 'root'
})
export class ChildrenService {
    private readonly urlGetAll = 'Child/get-all';
    private readonly urlGetById = 'Child/get-by-id';
    private readonly urlCreateChildren = 'Child/create-child';
    private readonly urlUpdateChildren = 'Child/update-child';
    constructor(private http: HttpClient) {}
    public getAll(): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public getById(childrenId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetById}?id=${childrenId}`
        )
    }
    public createChildren(childrenCreateDto: ChildrenCreateDto) : Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlCreateChildren}`, childrenCreateDto
        )
    }
    public updateChildren(child: Children) : Observable<ResponseDto> {
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdateChildren}`, child
        )
    }
}