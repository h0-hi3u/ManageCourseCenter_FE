import { AcademicTranscript } from "./academicTransript";
import { CartItem } from "./cartItem";
import { Class } from "./class";

export interface Course {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    openFormTime: Date;
    closeFormTime: Date;
    price: number;
    level: number;
    totalSlot: number;
    status: number;

    academicTranscripts: AcademicTranscript[];
    cartItems: CartItem[];
    classes: Class[];
}