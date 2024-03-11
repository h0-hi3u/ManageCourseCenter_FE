import { CartItem } from "./cartItem";
import { ChildrenClass } from "./childrenClass";
import { ClassTime } from "./classTime";
import { Course } from "./coures";
import { Teacher } from "./teacher";

export interface Class {
    id: number;
    courseId: number;
    teacherId: number;
    name: string;
    startDate: Date;
    endDate: Date;
    totalAmount: number;
    status: number;

    course: Course;
    teacher: Teacher;
    cartItems: CartItem[];
    childrenClasses: ChildrenClass[];
    classTimes: ClassTime[];
}