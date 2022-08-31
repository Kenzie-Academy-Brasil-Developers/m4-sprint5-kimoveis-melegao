import { Request, Response } from "express"
import propertiesListService from "../../services/properties/propertiesList.service"


const propertiesListController = async (req: Request, res: Response) => {

    try {
        
        const properties = await propertiesListService()

        return res.status(200).send(properties)

    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default propertiesListController