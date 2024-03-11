import { Class } from "./class";

export interface ClassTime {
    id: number;
    classId: number;
    dayInWeek: string;
    startTime: string;
    endTime: string;

    class: Class;
}