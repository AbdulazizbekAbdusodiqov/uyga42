import express from "express";
import { config } from "dotenv";
import {} from "./routes/index.js"

config()
const port = process.env.PORT

const app = express()

// app.use("/Author",)


app.listen(port , () => {
    console.log(`serverimiz ${port}da ishlayabdi`)
    
})

