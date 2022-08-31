import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/users";
import bcrypt from 'bcrypt'



const userCreateService = async ({name, email, password, isAdm}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists){
        throw new Error ("E-mail already exists")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)
    user.isAdm = isAdm
    user.isActive = true

    userRepository.create(user)

    const newUser = await userRepository.save(user)
    
    Object.defineProperty(newUser, "password", {
        enumerable: false,
        writable: true
    });

    const res: any = {...newUser}
    delete res.password

    return res
}

export default userCreateService