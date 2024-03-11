import { ChildrenClass } from "../childrenClass";

export interface Feedback {
    id: number;
    childrenClassId: number;
    courseRating: number;
    teacherRating: number;
    equipmentRating: number;
    description: number;

    childrenClass: ChildrenClass;
}