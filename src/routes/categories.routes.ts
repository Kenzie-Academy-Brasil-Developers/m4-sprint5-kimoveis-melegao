import { Router } from "express";
import categoriesListController from "../controllers/categories/categoriesList.controller";
import categoriesPropertiesListController from "../controllers/categories/categoriesPropertiesList.controller";

const routes = Router()

import categoryCreateController from "../controllers/categories/categoryCriate.controller";


import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import verifyCategoryMiddleware from "../middlewares/verifyCategory.middleware";

routes.post('/categories', authTokenMiddleware, isAdmMiddleware, categoryCreateController)
routes.get('/categories', categoriesListController)
routes.get('/categories/:id/properties', categoriesPropertiesListController)




export default routes