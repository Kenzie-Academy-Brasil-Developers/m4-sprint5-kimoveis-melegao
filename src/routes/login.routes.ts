import { Router } from "express";

const routes = Router()

import userLoginController from "../controllers/userLogin.controller";

routes.post('/login', userLoginController)


export default routes