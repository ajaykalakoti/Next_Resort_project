
"use server"

import DBconnection from "../utils/config/db"
import UserModel from "../utils/models/User";

export async function registerAction(registerDetails) {
    await DBconnection()
    

     try{                    ///utils/models/User.js imported 
         await UserModel.create({
            username:registerDetails.username,
            email:registerDetails.email,
            password:registerDetails.password
         })
         return{success:true}
     }catch(error){
          console.log(error);
     }

    //  try {
    //     const { username, email, password } = registerDetails;

    //     // Validate that all fields are present
    //     if (!username || !email || !password) {
    //         return { success: false, message: "All fields are required" };
    //     }

    //     // Check if the email is already registered
    //     const existingUser = await UserModel.findOne({ email });
    //     if (existingUser) {
    //         return { success: false, message: "Email already in use" };
    //     }

    //     // Create a new user if email is not in use
    //     const data = await UserModel.create({
    //       username,
    //       email,
    //       password,
    //     });

    //     console.log(data)
        
    //     return { success: true, message: "User registered successfully" };

    // } catch (error) {
    //     console.error(error);
    //     return { success: false, message: "Error registering user" };
    // }
}

