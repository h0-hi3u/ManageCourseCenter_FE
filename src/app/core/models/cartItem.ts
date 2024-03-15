import { Cart } from "./cart";
import { Children } from "./childrenDto/children";
import { Class } from "./class";
import { Course } from "./coures";

export interface CartItem {
    id: number;
    cartId: number;
    courseId: number;
    classId: number;
    childrenId: number;

    cart: Cart;
    child: Children;
    class: Class;
    course: Course;
}