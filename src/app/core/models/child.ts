import { AcademicTranscript } from "./academicTransript";
import { CartItem } from "./cartItem";
import { ChildrenClass } from "./childrenClass";
import { Parent } from "./parent";

export interface Child {
    id: number;
    parentId: number;
    fullName: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number; 

    parent: Parent;
    academicTranscripts: AcademicTranscript[];
    cartItems: CartItem[];
    childrenClasses: ChildrenClass[];
}