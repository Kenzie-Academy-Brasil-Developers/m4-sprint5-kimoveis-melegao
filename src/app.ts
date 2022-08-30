import "reflect-metadata"
import "express-async-errors"
import express from "express"
import usersRoutes from './routes/users.routes'
import loginRoutes from './routes/login.routes'

const app = express()
app.use(express.json())

app.use(usersRoutes)
app.use(loginRoutes)


export default app