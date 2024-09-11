"use client"

import React, { useState } from "react";
import { registerAction } from "../serverActions/registerAction";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  const router =useRouter()


    const RegisterHandler =async(e)=>{
        e.preventDefault();

        const userRegisterDetails ={username,email,password}
        console.log(userRegisterDetails)

        try{
          const response =await registerAction(userRegisterDetails)
             if (response.success){
              alert("Registration success")
              router.push("/Login")
             } 
        }catch(error){
          console.log(error);
        }
    }




  return (
    <div className="formContainer">
      <h1>Register Form</h1>
      <form onSubmit={RegisterHandler} className="formSection">
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <Link href="/Login">
         Already Registered? Login
      </Link>
    </div>
  );
};
export default RegisterForm;
