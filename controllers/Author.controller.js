import {Users} from '../models/index.js'


export const createCon = async(req, res, next) =>{
    try {  
        const create = new Users(...req.body)
        await create.save()
        return res.status(201).send(" Created")

    } catch (error) {
        next(error)
    }
}

export const loginUserCon = (req, res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export const getAllUserCon = (req, res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export const getOneUserCon = (req, res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export const updateUserCon = (req, res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export const deleteUserCon = (req, res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}