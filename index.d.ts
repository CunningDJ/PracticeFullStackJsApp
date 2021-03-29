
export interface ITodoItem {
    id: string;
    created: Date;
    updated: Date;
    due?: Date,
    title: string;
    body: string;
    authorId: string;
    assigneeId: string;
}

export interface IUser {
    id: string;
    name: string;
}

export interface DataErrJson<T> {
    data?: T;
    err?: string;
}