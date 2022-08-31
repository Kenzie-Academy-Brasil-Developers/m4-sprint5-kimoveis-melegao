import { Request, Response } from "express";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import propertyCreateService from "../../services/properties/propertyCreate.service";


const propertyCreateController = async (req: Request, res: Response) => {

    try {

        const {value, size, address, categoryId}: IPropertyRequest = req.body
        
        const newProperty = await propertyCreateService({value, size, address, categoryId})

        return res.status(201).send(newProperty)

    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default propertyCreateController