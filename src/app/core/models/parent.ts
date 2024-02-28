import { Cart } from "./cart";
import { Child } from "./child";

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
    children: Child[];
}