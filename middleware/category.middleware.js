export const crerateCategoryVal = (req, res, next) =>{
    try {
        const {title, description} = req.body
        if(!title || !description){
            return res.status(400).send("title or description not found")
        }
        req.body = {title, description}
        next()

    } catch (error) {
        next(error)
    }
}