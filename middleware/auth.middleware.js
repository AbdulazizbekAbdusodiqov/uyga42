import Joi from "joi"

export const createUserVal = (req, res, next) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.number().min(6).required(),
            name: Joi.string().min(3).required(),
            role: Joi.string().valid("user","admin", "superAdmin").default("user")      
        });
        next();
    } catch (error) {
    next(error)        
    }
};