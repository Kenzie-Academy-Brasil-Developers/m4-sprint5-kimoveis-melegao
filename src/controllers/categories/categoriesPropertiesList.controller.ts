import { Request, Response } from "express";
import categoriesPropertiesListService from "../../services/categories/categoriesPropertiesList.service";


const categoriesPropertiesListController = async (req: Request, res: Response) => {

    try {

        const {id} = req.params

        const listProperties = await categoriesPropertiesListService({id})

        return res.status(200).send(listProperties)
        
    } catch (err) {
        if (err instanceof Error){
            return res.status(404).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default categoriesPropertiesListController