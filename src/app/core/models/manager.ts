import { EquipmentActivity } from "./equipmentActivity";

export interface Manager {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phone: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number;

    equipmentActivities: EquipmentActivity[];
}