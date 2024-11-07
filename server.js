import express from "express";
import { config } from "dotenv";
import { authorRouter, categoryRouter } from "./routes/index.js"
config()

const port = process.env.PORT
const app = express()
app.use(express.json())

app.use("/admin/user", authorRouter)
app.use('/admin/category', categoryRouter)

app.listen(port , () => {
    console.log(`serverimiz ${port}da ishlayabdi`)
})
