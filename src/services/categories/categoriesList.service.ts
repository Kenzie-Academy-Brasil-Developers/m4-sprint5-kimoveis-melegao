import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"


const categoriesListService = () => {

    const categoryRespository = AppDataSource.getRepository(Categories)

    const categories = categoryRespository.find()

    return categories
}

export default categoriesListService