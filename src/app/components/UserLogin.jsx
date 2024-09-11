
"use client"

import { useState } from "react";
import { loginAction } from "../serverActions/loginAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserLogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter(); //login is success its redirected to homepage to use this


const LoginHandler =async (e)=>{
    e.preventDefault();

    const loginDetails ={email,password}
    console.log(loginDetails);

    try{
      const response= await loginAction(loginDetails)  //importing serverActions/LoginAction.js
       if(response.success){
          router.push("/")
       }else{
          setError(response.message || "login failed")  //if error occurs
       }
      // console.log(loginDetails);
    }catch(error){
      setError(error.message)
    }
}


    return (
      <div className="formContainer">
        <h1>Login Form</h1>
        <form onSubmit={LoginHandler} className="formSection">
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/**if error occurs */}
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
          <button type="submit">Login</button>
        </form>
        <Link href="/register">
                If not registered? Register
        </Link>
      </div>
    );
}
export default UserLogin