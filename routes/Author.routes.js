import {Router} from "express";
import {} from "../controllers/index.js";
const AuthorRouter = Router()


AuthorRouter.get("/", GetAllAuthor);
AuthorRouter.get("/:id", GetAuthorByid);
AuthorRouter.post("/", CreateAuthor);
AuthorRouter.put("/:id", UpdateAuthor);
AuthorRouter.delete("/:id", DeleteAuthor)
