import { Request, Response } from "express";
import scheduleCreateService from "../../services/schedules/scheduleCreate.service";
import {IScheduleRequest} from '../../interfaces/schedules'


const scheduleCreateController = async (req: Request, res: Response) => {

    try {

        const {propertyId, date, hour} = req.body

        const userId = req.user.id

        const createSchedule = await scheduleCreateService({userId, propertyId, date, hour})

        return res.status(201).send({message: 'Scheduled with success', createSchedule})

        
    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default scheduleCreateController
