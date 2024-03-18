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
    private readonly urlGetFeedbackByChildrenId = 'Feedback/get-by-childrenId';
    private readonly urlGetFeedbackByParentId = 'Feedback/getAllFeedbackByParentId';
    private readonly urlGetFeedbackByCourseId = 'Feedback/get-by-courseId';
    constructor(private http : HttpClient) {}
    public getFeedbackByTeacherId(teacherId: number, pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetFeedbackByTeacherId}?teacherId=${teacherId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public getFeedbackByChildrenId(childrenId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetFeedbackByChildrenId}?childrenId=${childrenId}`
        )
    }
    public getFeedbackByParentId(parentId: number, pageSize: number, pageIndex: number) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetFeedbackByParentId}?parentId=${parentId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
        )
    }
    public getFeedbackByCourseId(courseId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetFeedbackByCourseId}?courseId=${courseId}`
        )
    }
}