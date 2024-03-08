import { CartItem } from "./cartItem";
import { Parent } from "./parentDto/parent";
import { Payment } from "./payment";

export interface Cart {
    id: number;
    parentId: number;
    status: number;

    parent: Parent;
    cartItems: CartItem[];
    Payments: Payment[];
}