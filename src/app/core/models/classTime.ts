import { Class } from "./class";

export interface ClassTime {
    id: number;
    classId: number;
    dayInWeek: string;
    startTime: Date;
    endTime: Date;

    class: Class;
}