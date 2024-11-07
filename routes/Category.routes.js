import express from "express";
import {
    createCategoryCon, 
    deleteCategoryCon, 
    getAllCategoryCon, 
    getOneCategoryCon, 
    updateCategoryCon 
} from "../controllers/index.js";

import { crerateCategoryVal } from '../middleware/index.js'

export const categoryRouter = express.Router()

categoryRouter.post('/',crerateCategoryVal, createCategoryCon)
categoryRouter.get('/',getAllCategoryCon)
categoryRouter.get('/:id',getOneCategoryCon)
categoryRouter.put('/:id',updateCategoryCon)
categoryRouter.delete('/:id',deleteCategoryCon)