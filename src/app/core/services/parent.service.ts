import { ParentCreateDto } from './../models/parentDto/parentCreateDto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/reponseDto';
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ParentService {
    private readonly urlCreateParent = 'Parent/create-parent';
    private readonly urlGetChildren = 'Parent/get-child-parentId';
    private readonly urlGetAll = 'Parent/get-all-parent';

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
}