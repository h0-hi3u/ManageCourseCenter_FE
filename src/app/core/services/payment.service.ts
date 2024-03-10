import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/reponseDto";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private readonly urlGetPaymentByParentId ='Payment/get_payment_by_parent_id';
    constructor(private http: HttpClient) {}

    public getPaymentByParentId(parentId: string) : Observable<ResponseDto> {
        return this.http.get<ResponseDto>(
            `${environment.urlApi}/${this.urlGetPaymentByParentId}?parentId=${parentId}`
        )
    }
}