import { Console } from "console"
import { Equal } from "typeorm"
import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"
import { ICategoryRequestProperty } from "../../interfaces/categories"


const categoriesPropertiesListService = async ({id}: ICategoryRequestProperty) => {

    
    const categoryRepository = AppDataSource.getRepository(Categories)

    const findProperty = await categoryRepository.findOne({
        where: {
            id: id,
        },
        relations: {
            properties: true
        }
    })

    if(!findProperty){
        throw new Error('Not found')
    }
    
    return findProperty

}

export default categoriesPropertiesListService