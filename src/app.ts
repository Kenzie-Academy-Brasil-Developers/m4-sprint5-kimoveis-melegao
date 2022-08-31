import "reflect-metadata"
import "express-async-errors"
import express from "express"
import usersRoutes from './routes/users.routes'
import loginRoutes from './routes/login.routes'
import categoriesRoutes from './routes/categories.routes'
import propertiesRoutes from './routes/properties.routes'


const app = express()
app.use(express.json())

app.use(usersRoutes)
app.use(loginRoutes)
app.use(categoriesRoutes)
app.use(propertiesRoutes)

export default app