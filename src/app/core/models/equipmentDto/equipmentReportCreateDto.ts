export interface EquipmentReportCreateDto {
    senderId: number;
    roomId: number;
    equipmentId: number;
    description: string;
    sendTime: Date;
    closeTime? : Date;
    status: number;
}