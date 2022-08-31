import { Router } from "express";
import propertiesListController from "../controllers/properties/propertiesList.controller";

import propertyCreateController from "../controllers/properties/propertyCreate.controller";

import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import verifyCategoryMiddleware from "../middlewares/verifyCategory.middleware";

const routes = Router()

routes.post('/properties', authTokenMiddleware, isAdmMiddleware, verifyCategoryMiddleware, propertyCreateController)
routes.get('/properties', propertiesListController)

export default routes