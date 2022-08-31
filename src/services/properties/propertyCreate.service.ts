import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";



const propertyCreateService = async ({value, size, address, categoryId}: IPropertyRequest) => {

    const addressRepository = AppDataSource.getRepository(Addresses)
    const propertyRepository = AppDataSource.getRepository(Properties)
    const categoryRespository = AppDataSource.getRepository(Categories)

    const findCategogy = await categoryRespository.findOne({
        where: {
            id: categoryId
        }
    })

    if (!findCategogy){
        throw new Error("Category not found")
    }

    if (address.state.length > 2){
        throw new Error ("State must have two character")
    }

    if (address.zipCode.length > 8){
        throw new Error ("Zipcode must have eight character")
    }

    const addressAlreadyExists = await addressRepository.findOne({
        where: {
            district: address.district
        }
    })

    if (addressAlreadyExists){
        throw new Error ('Address already exists')
    }

    const newAddress = new Addresses()
    newAddress.district = address.district
    newAddress.zipCode = address.zipCode
    newAddress.number = address.number as string
    newAddress.city = address.city
    newAddress.state = address.state

    addressRepository.create(newAddress)
    await addressRepository.save(newAddress)

    const newProperty = new Properties()
    newProperty.value = value
    newProperty.size = size
    newProperty.address = newAddress
    newProperty.category = findCategogy
    newProperty.sold = false
    newProperty.createdAt = new Date()
    newProperty.updatedAt = new Date()

    propertyRepository.create(newProperty)
    await propertyRepository.save(newProperty)

    return newProperty

}

export default propertyCreateService