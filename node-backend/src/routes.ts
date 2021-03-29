import { Router } from 'express';

import { ITodoItem, IUser, DataErrJson } from '../../index';
import * as db from './db';

// CONSTANTS
const GENERIC_SERVER_ERROR_MESSAGE = 'Error with backend.  Try again later.';
const GENERIC_DATA_ERROR_MESSAGE = 'Database error.  Try again later.';

// ROUTERS
const mainRouter = Router();

const userRouter = Router();
mainRouter.use('/users', userRouter);

const todoRouter = Router();
mainRouter.use('/todos', todoRouter);

// USER routes
userRouter.get<null,DataErrJson<IUser[]>>('/', (req, res, next) => {
    try {
        const users = db.getUsers();
        return res.json({ data: users });
    } catch (e) {
        next(new Error(GENERIC_DATA_ERROR_MESSAGE));
    }
});

userRouter.get<{ userId: string },DataErrJson<IUser>>('/:userId', (req, res, next) => {
    try {
        const user = db.getUser(req.params.userId);
        return res.json({ data: user });
    } catch (e) {
        next(new Error(GENERIC_DATA_ERROR_MESSAGE));
    }
});



// TODO routes
todoRouter.get<null,DataErrJson<ITodoItem[]>>('/', (req, res, next) => {
    try {
        const todoItems = db.getTodos();
        return res.json({ data: todoItems });
    } catch (e) {
        next(new Error(GENERIC_DATA_ERROR_MESSAGE));
    }
});

todoRouter.get<{ todoId: string },DataErrJson<ITodoItem>>('/:todoId', (req, res, next) => {
    try {
        const todoItem = db.getTodo(req.params.todoId);
        return res.json({ data: todoItem });
    } catch (e) {
        next(new Error(GENERIC_DATA_ERROR_MESSAGE));
    }
});



// MAIN routes
// Catches errors
mainRouter.use<null,DataErrJson<any>>((err: Error, req: any, res: any, next: any) => {
    if (err) {
        return res.status(500)
                .json({ err: err.message });
    } else {
        return res.status(500).json({ err: GENERIC_SERVER_ERROR_MESSAGE })
    }
})


export default mainRouter;