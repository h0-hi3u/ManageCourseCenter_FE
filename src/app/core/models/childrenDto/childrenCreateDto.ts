export interface ChildrenCreateDto {
    parentId: number;
    fullName: string;
    username: string;
    password: string;
    imgUrl: string,
    birthDay: Date;
    gender: number;
    role: number;
    status: number; 
}