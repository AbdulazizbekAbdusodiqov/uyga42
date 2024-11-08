import express from "express";
import { createCon, deleteUserCon, getAllUserCon, getOneUserCon, loginUserCon, updateUserCon } from "../controllers/index.js";
import { checkUser, createUserVal } from "../middleware/index.js";
export const authorRouter = express.Router()

authorRouter.post('/register',createUserVal,checkUser,createCon)
authorRouter.post('/login', loginUserCon)
authorRouter.get('/users', getAllUserCon)
authorRouter.get('/users/:id', getOneUserCon)
authorRouter.put('/users/:id', updateUserCon)
authorRouter.delete('/users/:id', deleteUserCon)