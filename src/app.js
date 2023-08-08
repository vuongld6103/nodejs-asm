import express from "express"
import dotenv from "dotenv"
import router from "./routers";
import mongoose from "mongoose";
dotenv.config();

const app = express()
app.use(express.json())
app.use('/api', router)
mongoose.connect('mongodb://127.0.0.1:27017/asm1').then(() => {
  console.log("database connected!");
})

app.listen(7000, () => {
  console.log(`Server is running on 8000`)
})