import { Cart } from "../cart";
import { Children } from "../children";

export interface Parent {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phone: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number;

    carts: Cart[];
    children: Children[];
}