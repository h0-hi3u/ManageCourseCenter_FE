import { EquipmentActivity } from "./equipmentActivity";
import { EquipmentReport } from "./equipmentReport";
import { Schedule } from "./schedule";

export interface Room {
    id: number;
    floor: number;
    roomNo: number;
    status: number;

    equipmentActivities: EquipmentActivity[];
    equipmentReports: EquipmentReport[];
    schedules: Schedule[];
}