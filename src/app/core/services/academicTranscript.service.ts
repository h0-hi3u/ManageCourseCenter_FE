import { AcademicTranscriptUpdateDto } from './../models/academicTranscript/academicTranscriptUpdateDto';
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
    private readonly urlGetTransByClassId = 'AcademicTranscript/get-all-trans-by-class-id';
    private readonly urlUpdate = 'AcademicTranscript/update-academicTranscript-by-Id'
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
    public getTransByClassId(classId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetTransByClassId}?classId=${classId}`
        )
    }
    public updateTrans(academicTranscriptUpdateDto: AcademicTranscriptUpdateDto, transId: number) : Observable<ResponseDto> {
        return this.http.put<ResponseDto>(
            `${environment.urlApi}/${this.urlUpdate}?transcriptId=${transId}`, academicTranscriptUpdateDto
        )
    }
}