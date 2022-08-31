import { Router } from "express";
import categoriesListController from "../controllers/categories/categoriesList.controller";

const routes = Router()

import categoryCreateController from "../controllers/categories/categoryCriate.controller";


import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

routes.post('/categories', authTokenMiddleware, isAdmMiddleware, categoryCreateController)
routes.get('/categories', categoriesListController)




export default routes