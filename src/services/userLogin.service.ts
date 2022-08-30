import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { IUserLogin } from "../interfaces/users"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"


const userLoginService = async ({email, password}: IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const account = users.find(user => user.email === email)

    if (!account){
        throw new Error("Invalid password or e-mail")
    }

    const passwordMatch = bcrypt.compareSync(password, account.password)

    if (!passwordMatch){
        throw new Error("Invalid password or e-mail")
    }

    const token = jwt.sign({isAdm: account.isAdm, id: account.id}, 'SECRET_KEY', {expiresIn: '24h'})

    return token
}

export default userLoginService