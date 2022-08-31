import { Request, Response } from "express"
import categoriesListService from "../../services/categories/categoriesList.service"



const categoriesListController = async (req: Request, res: Response) => {

    try {

        const categories = await categoriesListService()

        return res.status(200).send(categories)

        
    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default categoriesListController