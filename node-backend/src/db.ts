
import { ITodoItem, IUser } from '../../index';

const MOCK_TODOS: ITodoItem[] = [
    {
        id: '111',
        created: new Date('03/25/2021'),
        updated: new Date('03/25/2021'),
        due: new Date('03/26/2021'),
        title: 'Buy Concert Tickets',
        body: 'Buy some concert tickets',
        authorId: 'aaa',
        assigneeId: 'aaa'
    },
    {
        id: '222',
        created: new Date('03/23/2021'),
        updated: new Date('03/25/2021'),
        due: new Date('03/26/2021'),
        title: 'Plant flowers',
        body: 'Plant flowers in the backyard',
        authorId: 'aaa',
        assigneeId: 'bbb'
    },
    {
        id: '333',
        created: new Date('03/22/2021'),
        updated: new Date('03/25/2021'),
        title: 'Chase butterflies',
        body: 'Chase butterflies to your heart\'s content',
        authorId: 'bbb',
        assigneeId: 'bbb'
    },
];

const MOCK_USERS: IUser[] = [
    {
        id: 'aaa',
        name: 'Bob Frick'
    },
    {
        id: 'bbb',
        name: 'Alice Stein'
    }
];

export function getUser(id: string): IUser {
    return MOCK_USERS.filter(u => (u.id === id))[0];
}

export function getUsers(): IUser[] {
    return MOCK_USERS;
}

export function getTodo(id: string): ITodoItem {
    return MOCK_TODOS.filter(td => (td.id === id))[0];
}

export function getTodos(): ITodoItem[] {
    return MOCK_TODOS;
}