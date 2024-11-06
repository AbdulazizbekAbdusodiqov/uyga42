import mongoose from "mongoose";
import {config}  from "dotenv"
config()
mongoose.connect(process.env.DB_URI);

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

export const Category =  mongoose.model("Category", categorySchema);
