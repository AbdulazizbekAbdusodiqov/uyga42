import mongoose from "mongoose";
import {config}  from "dotenv"
config()
mongoose.connect(process.env.DB_URI);

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  name : String,
  role : {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default : 'user'
  }

});

export const Users =  mongoose.model("Users", userSchema);