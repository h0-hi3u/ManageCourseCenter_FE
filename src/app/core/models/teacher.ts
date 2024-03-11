import { AcademicTranscript } from "./academicTransript";
import { Class } from "./class";
import { Schedule } from "./schedule";

export interface Teacher {
    id: number;
    fullName: string;
    email: string;
    password: string;
    imageUrl: string;
    phone: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number;

    academicTranscripts: AcademicTranscript[];
    classes: Class[];
    schedules: Schedule[];
}