import { Equipment } from "./equipment";
import { Room } from "../room";

export interface EquipmentReport {
    id: number;
    senderId: number
    roomId: number;
    equipmentId: number;
    description: string;
    sendTime: Date;
    closeTime? : Date;
    status: number;

    equipment: Equipment;
    room: Room;
}