import { Children } from "../childrenDto/children";
import { Course } from "../coures";
import { Teacher } from "../teacherDto/teacher";

export interface AcademicTranscript {
    id: number;
    teacherId: number;
    courseId: number;
    childrenId: number;
    quiz1: number;
    quiz2: number;
    midterm: number;
    final: number;
    average: number;
    status: number;

    children: Children;
    course: Course;
    teacher:Teacher;
}