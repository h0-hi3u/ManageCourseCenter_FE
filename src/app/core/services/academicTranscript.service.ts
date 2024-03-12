import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class AcademicTranscriptService {
    private readonly urlGetTranscriptByChildrenId = 'AcademicTranscript/get-academicTranscript-by-childrenId';
    private readonly urlGetById = 'AcademicTranscript/get-by-id';
    constructor(private http: HttpClient) {

    }
    public getTranscriptByChildrenId(childrenId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto> (
            `${environment.urlApi}/${this.urlGetTranscriptByChildrenId}?childrenId=${childrenId}`
        )
    }
    public getById(id: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetById}?id=${id}`
        )
    }
}