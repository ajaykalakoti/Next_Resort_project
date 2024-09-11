"use server"

import { signIn } from "../auth";
import DBconnection from "../utils/config/db"

export async function loginAction(loginDetails) {
    await DBconnection()

    console.log("sample login ",loginDetails);

    try{                                      //matching register credentials to the login credentials 
        const response = await signIn('credentials',{
            email:loginDetails.email,
            password:loginDetails.password,
            redirect:false
        })
        return{success:true}
    }catch(error){
       throw new Error("Invalid credentials")
    }

}