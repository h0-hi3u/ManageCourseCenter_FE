import { Cart } from "./cart";

export interface Payment {
    id: number;
    cartId: number;
    method: number;
    status: number;

    cart: Cart;
}