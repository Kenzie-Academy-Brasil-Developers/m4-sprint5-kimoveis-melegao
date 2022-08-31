import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserDelete } from "../../interfaces/users"



const userDeleteService = async ({id}: IUserDelete) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: id
        }
    })

    
    const newData = {
        isActive: false
    }

    await userRepository.update({id}, newData)

    return ({message: 'User deleted'})
    

}

export default userDeleteService