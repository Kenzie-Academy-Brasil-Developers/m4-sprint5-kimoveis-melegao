import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Properties } from "../entities/properties.entity"


const verifyPropertyMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const {propertyId} = req.body

    const propertyRepository = AppDataSource.getRepository(Properties)

    const findProperty = await propertyRepository.findOne({
        where: {
            id: propertyId
        }
    })
    if (!findProperty){
        return res.status(404).json({message: "Property not found"})
    }

    next()
}

export default verifyPropertyMiddleware