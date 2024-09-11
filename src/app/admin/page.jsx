import { redirect } from "next/navigation"
import { auth } from "../auth"
import Link from "next/link"
import AdminNavbar from "../components/AdminNavbar"
import AddProduct from "../components/AddProduct"


const AdminPage =async()=>{  //redirecting without login 

    const session =await auth()
      if(!session){
        redirect("/Login")
      }


    return(
        <div>
           {session? (
            <>
              <AdminNavbar />
               <AddProduct/>
            </>
          ) :"Not authorized"
          }
        </div>
    )
}
export default AdminPage