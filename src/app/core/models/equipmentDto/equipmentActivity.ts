import { Equipment } from "./equipment";
import { Manager } from "../managerDto/manager";
import { Room } from "../roomDto/room";

export interface EquipmentActivity {
    id: number;
    managerId: number;
    equipmentId: number;
    roomId: number;
    operateTime: Date;
    finishedTime: Date;
    description: string;
    action: number;
    status: number;

    equipment: Equipment;
    manager: Manager;
    room: Room;
}