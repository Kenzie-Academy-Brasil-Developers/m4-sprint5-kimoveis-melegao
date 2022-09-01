import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Properties } from "../entities/properties.entity"

const verifySchedulePropertyMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params

    const propertyRepository = AppDataSource.getRepository(Properties)

    const findProperty = await propertyRepository.findOne({
        where: {
            id: id
        }
    })
    if (!findProperty){
        return res.status(404).json({message: "Property not found"})
    }

    next()
}

export default verifySchedulePropertyMiddleware