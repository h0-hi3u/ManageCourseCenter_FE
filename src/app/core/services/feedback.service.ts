import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    private readonly urlGetFeedbackByTeacherId = 'Feedback/get-feedback-by-teacher-id';
    constructor(private http : HttpClient) {}
    public getFeedbackByTeacherId(teacherId: number, pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetFeedbackByTeacherId}?teacherId=${teacherId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
}