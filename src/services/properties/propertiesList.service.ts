import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"



const propertiesListService = () => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const properties = propertyRepository.find()

    return properties
}

export default propertiesListService