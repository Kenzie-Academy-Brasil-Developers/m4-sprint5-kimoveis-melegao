import { Request, Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";


const userDeleteController = async (req: Request, res: Response) => {

    try {

        const {id} = req.params

        const deleteUser = await userDeleteService({ id })

        return res.status(204).json(deleteUser)

        
        
    } catch (err) {
        if (err instanceof Error){

            return res.status(404).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default userDeleteController