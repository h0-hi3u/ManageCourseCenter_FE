import { Cart } from "./cart";

export interface Payment {
    id: number;
    cartId: number;
    processTime: Date;
    method: number;
    status: number;

    cart: Cart;
}