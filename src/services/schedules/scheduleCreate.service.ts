import AppDataSource from '../../data-source'
import { Properties } from '../../entities/properties.entity'
import { Schedules } from '../../entities/schedules_users_properties.entity'
import { User } from '../../entities/user.entity'
import {IScheduleRequest} from '../../interfaces/schedules'


const scheduleCreateService = async ({userId, propertyId, date, hour}: IScheduleRequest) => {

    const propertyRepository = AppDataSource.getRepository(Properties)
    const userRepository = AppDataSource.getRepository(User)
    const scheduleRepository = AppDataSource.getRepository(Schedules)


    const findProperty = await propertyRepository.findOne({
        where: {
            id: propertyId
        }
    })
    if (!findProperty){
        throw new Error ('Property not found')
    }

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })
    if(!findUser){
        throw new Error ('User not found')
    }

    const scheduleAlreadyExists = await scheduleRepository.findOne({
        where: {
            date: date,
            hour: hour
        }
    })

    if (scheduleAlreadyExists){
        throw new Error ('Schedule already exists')
    }

    const newHour = hour.split(":")[0]

    if(Number(newHour) < 8 || Number(newHour) > 18 ){
        throw new Error("Invalid hour")
    }

    const data = new Date(date)
    const day = data.getDay()

    if(day === 6 || day === 0){
        throw new Error("Agendamentos só de segunda a sexta")
    }


    const newSchedule = new Schedules()
    newSchedule.date = date,
    newSchedule.hour = hour,
    newSchedule.property = findProperty,
    newSchedule.user = findUser

    scheduleRepository.create(newSchedule)
    await scheduleRepository.save(newSchedule)

    return newSchedule
}

export default scheduleCreateService