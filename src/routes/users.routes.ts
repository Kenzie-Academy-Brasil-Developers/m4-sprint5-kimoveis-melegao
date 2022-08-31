import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";

import authTokenMiddleware from "../middlewares/authToken.middleware";
import isActiveMiddleware from "../middlewares/isActive.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";


routes.post('/users', userCreateController)
routes.get('/users', authTokenMiddleware, isAdmMiddleware, userListController)
routes.delete('/users/:id', authTokenMiddleware, isAdmMiddleware, isActiveMiddleware, userDeleteController)





export default routes