import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const authTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({message: "Missing Authorization Token"})
    }

    token = token.split(" ")[1]

    
    jwt.verify(token as string, 'SECRET_KEY' as string, (error: any, decoded: any) => {

        if(error){
            return res.status(401).json({message: "Invalid token"})
        }

        req.user = {
            isAdm: decoded.isAdm,
            id: decoded.sub
        }

        next()

    })

}

export default authTokenMiddleware