import { ParentCreateDto } from './../models/parentDto/parentCreateDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/reponseDto';
import { environment } from 'src/environment/environment';
import { ParentUpdateDto } from '../models/parentDto/parentUpdateDto';

@Injectable({
    providedIn: 'root'
})
export class ParentService {
    private readonly urlCreateParent = 'Parent/create-parent';
    private readonly urlGetChildren = 'Parent/get-child-parentId';
    private readonly urlGetAll = 'Parent/get-all-parent';
    private readonly urlUpdateParent = 'Parent/update-parent-information'
    private readonly urlGetParentById = 'Parent/get-parent-id';
    constructor(private http: HttpClient) {}
    
    public createParent(parentCreateDto: ParentCreateDto) : Observable<ResponseDto> {
        return this.http.post<ResponseDto>(
            `${environment.urlApi}/${this.urlCreateParent}`, parentCreateDto
        )
    }
    public getChildrenByParenId(parentId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetChildren}?id=${parentId}`
        )
    }
    public getAll() : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetAll}`
        )
    }
    public updateParent(parentUpdateDto: ParentUpdateDto) : Observable<ResponseDto> {
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdateParent}`, parentUpdateDto
        )
    }
    public getParentById(parentId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetParentById}?id=${parentId}`
        )
    }
}