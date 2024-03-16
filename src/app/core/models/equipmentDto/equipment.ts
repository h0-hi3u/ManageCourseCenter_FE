import { EquipmentActivity } from "./equipmentActivity";
import { EquipmentReport } from "./equipmentReport";

export interface Equipment {
    id: number;
    name: string;
    supplier: string;
    quantity: number;
    description: string;
    type: number;
    status: number;

    equipmentActivities: EquipmentActivity[];
    equipmentReports: EquipmentReport[];
}