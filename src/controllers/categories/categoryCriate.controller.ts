import { Request, Response } from "express";
import categoryCreateService from "../../services/categories/categoryCreate.service";


const categoryCreateController = async (req: Request, res: Response) => {

    try {

        const {name} = req.body

        const newCategory = await categoryCreateService({name})

        return res.status(201).send(newCategory)

        
    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'error': err.name,
                'message': err.message
            })
        }
    }

}

export default categoryCreateController