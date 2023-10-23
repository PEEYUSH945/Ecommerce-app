import userModel from "../models/userModel.js";
// import orderModel from "../models/orderModel.js";

import {  hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  console.log(req.body);
   console.log("api hit ");
   res.send("register req");
  // try {
  // console.log(req.body);

  //   const { name, email, password, phone } = req.body;
  //   //validations
  //   if (!name) {
  //     return res.send({ error: "Name is Required" });
  //   }
  //   if (!email) {
  //     return res.send({ message: "Email is Required" });
  //   }
  //   if (!password) {
  //     return res.send({ message: "Password is Required" });
  //   }
  //   if (!phone) {
  //     return res.send({ message: "Phone no is Required" });
  //   }
  //   if (!address) {
  //     return res.send({ message: "Address is Required" });
  //   }
  //   if (!answer) {
  //     return res.send({ message: "Answer is Required" });
  //   }
  //   //check user
  //   const exisitingUser = await userModel.findOne({ email });
  //   //check exisiting user
  //   if (exisitingUser) {
  //     return res.status(200).send({
  //       success: false,
  //       message: "Already Register please login",
  //     });
  //   }
  //   //register user
  //   const hashedPassword = await hashPassword(password);
  //   //save
  //   const user = await new userModel({
  //     name,
  //     email,
  //     phone,
  //     address,
  //     password: hashedPassword,
  //     answer,
  //   }).save();

  //   res.status(201).send({
  //     success: true,
  //     message: "User Register Successfully",
  //     user,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send({
  //     success: false,
  //     message: "Errro in Registeration",
  //     error,
  //   });
  // }
};


