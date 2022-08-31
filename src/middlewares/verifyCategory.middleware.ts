import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Categories } from "../entities/categories.entity"


const verifyCategoryMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const {categoryId} = req.body

    const categoryRepository = AppDataSource.getRepository(Categories)

    const findCategory = await categoryRepository.findOne({
        where: {
            id: categoryId
        }
    })

    if (!findCategory){
        return res.status(404).json({message: "Category not found"})
    }

    next()
}

export default verifyCategoryMiddleware