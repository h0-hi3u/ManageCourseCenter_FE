import { Children } from "./children";
import { Class } from "./class";
import { Feedback } from "./feedbackDto/feedback";
import { Schedule } from "./schedule";

export interface ChildrenClass {
    id: number;
    classId: number;
    childrenId: number;

    children: Children;
    class: Class;
    feedbacks: Feedback[];
    schedules: Schedule[];
}