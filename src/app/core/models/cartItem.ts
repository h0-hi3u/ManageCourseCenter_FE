import { Cart } from "./cart";
import { Child } from "./child";
import { Class } from "./class";
import { Course } from "./coures";

export interface CartItem {
    id: number;
    cartId: number;
    courseId: number;
    classId: number;
    childrenId: number;

    cart: Cart;
    child: Child;
    class: Class;
    course: Course;
}