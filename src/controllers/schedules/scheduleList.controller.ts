import { Request, Response } from "express";
import scheduleCreateService from "../../services/schedules/scheduleCreate.service";
import scheduleListService from "../../services/schedules/scheduleList.service";

const scheduleListController = async (req: Request, res: Response) => {

    try {
        
        const { id } = req.params

        const listSchedules = await scheduleListService({id})

        return res.status(200).send(listSchedules)
        
    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'err': err.name,
                'message': err.message
            })
        }
    }
}

export default scheduleListController