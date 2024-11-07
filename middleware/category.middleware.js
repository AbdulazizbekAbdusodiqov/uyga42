import Joi from "joi";

export const crerateCategoryVal = (req, res, next) =>{
    try {
        const categorySchema = Joi.object({
            title : Joi.string().required().trim(),
            description : Joi.string().trim()
        });
        
        next()
        
    } catch (error) {
        next(error)
    }
}