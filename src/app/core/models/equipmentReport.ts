import { Equipment } from "./equipment";
import { Room } from "./room";

export interface EquipmentReport {
    id: number;
    roomId: number;
    equipmentId: number;
    description: string;
    status: number;

    equipment: Equipment;
    room: Room;
}