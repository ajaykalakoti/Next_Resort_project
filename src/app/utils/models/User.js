import mongoose from "mongoose";
//const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    booking: [
      {
        //models/booking.js
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      }],
  },
  {
    collection: "details", // this is the MongoDB collections name, is connecting in this
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema); //this user schema is insert in our model || or model is not there

export default UserModel;
