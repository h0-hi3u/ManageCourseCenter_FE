import { Equipment } from "./equipment";
import { Manager } from "../managerDto/manager";
import { Room } from "../room";

export interface EquipmentActivity {
    id: number;
    managerId: number;
    equipmentId: number;
    roomId: number;
    operateTime: Date;
    finishedTime: Date;
    description: string;
    action: number;

    equipment: Equipment;
    manager: Manager;
    room: Room;
}