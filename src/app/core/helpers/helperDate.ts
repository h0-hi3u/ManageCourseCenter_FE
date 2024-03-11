import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
@Injectable({
    providedIn: 'root'
})
export class HelperDate {
    constructor(private datePipe: DatePipe){}
    public formatDateYearMonthDay(dateString: string): string {
        const date = new Date(dateString);
        return this.datePipe.transform(date, 'dd-MM-yyyy') || 'Error date';
    }
    public formatDateYearMonthDayDate(date: Date): string {
        return this.datePipe.transform(date, 'yyyy-MM-dd') || 'Error date';
    }
}