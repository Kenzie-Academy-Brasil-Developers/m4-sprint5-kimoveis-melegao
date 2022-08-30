import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"


const isAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userIsAdm = req.user.isAdm
    const userId = req.user.id

    const userRepository = AppDataSource.getRepository(User)

    const user = userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user){
        throw new Error('User not found')
    }

    if (!userIsAdm){
        return res.status(403).json({message: "Only admin can access!"})
    }

    next ()
}

export default isAdmMiddleware