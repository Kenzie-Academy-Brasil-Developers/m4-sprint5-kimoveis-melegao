import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { Schedules } from "../../entities/schedules_users_properties.entity"
import { IScheduleProperty } from "../../interfaces/schedules"


const scheduleListService = async ({id}: IScheduleProperty) => {

    const scheduleRepository = AppDataSource.getRepository(Schedules)
    const propertyReposity = AppDataSource.getRepository(Properties)
    
    const findSchedules = await propertyReposity.findOne({
        where: {
            id: id
        },
        relations: {
            schedules: true
        }
    })

    return findSchedules

}

export default scheduleListService