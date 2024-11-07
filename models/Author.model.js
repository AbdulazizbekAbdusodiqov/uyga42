import mongoose from "mongoose";
import {config}  from "dotenv"
config()
mongoose.connect(process.env.DB_URI);

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
});

export const Users =  mongoose.model("Author", authorSchema);
