import { Request, Response, NextFunction } from "express"
import { User } from "../entities/user.entity"
import { IUserDelete } from "../interfaces/users"
import AppDataSource from "../data-source"


const isActiveMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const {id} = req.params
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: id
        }
    })

    if (!user){
        return res.status(404).json({message: 'User not found'})
    }

    if (user.isActive === false){
        return res.status(400).json({message: 'User is already deleted'})
    }
    console.log('FOI PRO NEXT')
    next()

}

export default isActiveMiddleware