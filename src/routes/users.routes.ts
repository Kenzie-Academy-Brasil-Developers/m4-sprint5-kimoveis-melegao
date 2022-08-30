import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";


routes.post('/users', userCreateController)
routes.get('/users', userListController)





export default routes