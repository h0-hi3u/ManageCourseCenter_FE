import { Child } from "./child";
import { Class } from "./class";
import { Feedback } from "./feedback";
import { Schedule } from "./schedule";

export interface ChildrenClass {
    id: number;
    classId: number;
    childrenId: number;

    children: Child;
    class: Class;
    feedbacks: Feedback[];
    schedules: Schedule[];
}