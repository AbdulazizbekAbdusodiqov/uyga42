import express from "express";
import {} from "../controllers/index.js";

export const categoryRouter = express.Router()

categoryRouter.post('/',createCategoryCon)
categoryRouter.get('/',getAllCategoryCon)
categoryRouter.get('/:id',getOneCategoryCon)
categoryRouter.put('/:id',updateCategoryCon)
categoryRouter.delete('/:id',deleteCategoryCon)
