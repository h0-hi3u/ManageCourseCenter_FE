import { EquipmentActivity } from "./equipmentDto/equipmentActivity";

export interface Manager {
    id: number;
    fullName: string;
    email: string;
    password: string;
    imageUrl: string;
    phone: string;
    birthDay: Date;
    gender: number;
    role: number;
    status: number;

    equipmentActivities: EquipmentActivity[];
}