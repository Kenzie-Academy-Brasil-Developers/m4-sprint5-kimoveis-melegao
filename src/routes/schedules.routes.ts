import { Router } from "express";
import scheduleCreateController from "../controllers/schedules/scheduleCreate.controller";
import scheduleListController from "../controllers/schedules/scheduleList.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import verifyPropertyMiddleware from "../middlewares/verifyProperty.middleware";
import verifySchedulePropertyMiddleware from "../middlewares/verifyScheduleProperty.middleware";

const routes = Router()




routes.post('/schedules', authTokenMiddleware, verifyPropertyMiddleware, scheduleCreateController)
routes.get('/schedules/properties/:id', authTokenMiddleware, isAdmMiddleware, verifySchedulePropertyMiddleware, scheduleListController)


export default routes