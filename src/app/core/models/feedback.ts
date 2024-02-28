import { ChildrenClass } from "./childrenClass";

export interface Feedback {
    id: number;
    childrenClassId: number;
    courseRating: number;
    equipmentRating: number;
    description: number;

    childrenClass: ChildrenClass;
}