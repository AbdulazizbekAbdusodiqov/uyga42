import {Router} from "express";
import {} from "../controllers/index.js";
import { create } from "domain";




const AuthorRouter = Router()


AuthorRouter.get("/:id", GetAuthorByid);
AuthorRouter.post("/", CreateAuthor);
AuthorRouter.put("/:id", UpdateAuthor);
AuthorRouter.delete("/:id", DeleteAuthor)
