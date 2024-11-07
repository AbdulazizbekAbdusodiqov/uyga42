import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()

export const checkUser = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];
        const secretKey = process.env.SECRET_KEY

        const decodeToken = jwt.verify(token, secretKey);

        const { role } = req.body

        if (role == 'superAdmin') {
            const superAdmin = await Users.exists(role)

            if (!superAdmin) {
               next()
            }
            return res.status(400).send("super admin alread exists")
        }
        if (role == 'admin') {

            if(decodeToken.role == "superAdmin") {
                next()
            }
            return res.status(400).send("you are not super admin")

        }

        next()

    } catch (error) {

        next(error)

    }

}