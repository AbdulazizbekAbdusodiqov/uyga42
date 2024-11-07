import {Users as Category} from "../models/index.js"

export const createCategoryCon = async (req, res, next) => {
    try {
        const newCategory = await new Category(...req.body)
        await newCategory.save()

        return res.status(201).send("category created")

    } catch (error) {
        next(error)
    }
}

export const getAllCategoryCon = async(req, res, next) => {
    try {
        const allUser = await Category.find().limit(30)

        return res.status(200).send(allUser)

    } catch (error) {
        next(error)
    }
}
export const getOneCategoryCon = async(req, res, next) => {
    try {
        const id = req.params.id
        const user = await Category.findById(id)

        return res.status(200).send(user)

    } catch (error) {
        next(error)
    }
}
export const updateCategoryCon = async(req, res, next) => {
    try {
        
        const updatedUser = await Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if(!updatedUser){
            return res.status(400).send("category not found")
        }

        return res.status(201).send("category updated")

    } catch (error) {
        next(error)
    }
}
export const deleteCategoryCon = async (req, res, next) => {
    try {

        const deletedUser = await Category.findByIdAndDelete(id);

        if(!deletedUser){
            return res.status(400).send("category not found")
        }

        return res.status(201).send(deletedUser._id)

        
    } catch (error) {
        next(error)
    }
}