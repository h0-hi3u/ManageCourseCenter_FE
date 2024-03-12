import { ChildrenClass } from "./childrenClass";
import { Room } from "./room";
import { Teacher } from "./teacherDto/teacher";

export interface Schedule {
    id: number;
    teacherId: number;
    childrenClassId: number;
    roomId: number;
    startDate: Date;
    endDate: Date;
    attendance: number;

    childrenClass: ChildrenClass;
    room: Room;
    teacher: Teacher;
}