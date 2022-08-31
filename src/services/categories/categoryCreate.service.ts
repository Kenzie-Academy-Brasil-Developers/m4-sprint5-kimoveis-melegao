import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { ICategoryRequest } from "../../interfaces/categories"



const categoryCreateService = async ({name}: ICategoryRequest) => {

    const categoryRepository = AppDataSource.getRepository(Categories)

    const categories = await categoryRepository.find()

    const nameAlreadyExists = categories.find(category => category.name === name)

    if (nameAlreadyExists){
        throw new Error ("Category already exists")
    }

    const category = new Categories()
    category.name = name

    categoryRepository.create(category)

    const newCategory = await categoryRepository.save(category)

    return newCategory


}

export default categoryCreateService