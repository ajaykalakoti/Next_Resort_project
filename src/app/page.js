
import React from "react"
import DBconnection from "./utils/config/db"
import { auth } from "./auth"
import { redirect } from "next/navigation"
import UserNavigation from "./components/UserNavigation"
import AdminPage from "./admin/page"
import ProductCollection from "./components/ProductCollection"

const HomePage = async()=>{

   const session =await auth()  //session generated

   await DBconnection()   //db is imported in main page.js

   if(!session){    //if session is not created redirect to login page(inspect : applications : cookies : http//localhost:3000)
    redirect("/Login")
   }
   
   console.log("username check",session.username);  //this all are check the correct login user or not see in terminal
   console.log("role check :",session.role) 
   console.log("email is check:",session.email);
console.log("userId is check :",session.userId);

const userName =session.username

  return (
    <div>
      {session.role === 'user' && (          //these all are user logins
        <>
          <UserNavigation userName={userName}/>
          <h1>Welcome to Holiday Resort</h1>
          <ProductCollection/>
        </>
      )}
      {session.role === 'admin' &&  //this admin logins
        <AdminPage/> 
      }
    </div>
  )
}
export default HomePage