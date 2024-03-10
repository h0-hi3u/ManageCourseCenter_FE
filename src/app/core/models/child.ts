import { AcademicTranscript } from "./academicTransript";
import { CartItem } from "./cartItem";
import { ChildrenClass } from "./childrenClass";
import { Parent } from "./parentDto/parent";

export interface Child {
    id: number;
    parentId: number;
    fullName: string;
    username: string;
    password: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number; 

    parent: Parent;
    academicTranscripts: AcademicTranscript[];
    cartItems: CartItem[];
    childrenClasses: ChildrenClass[];
}