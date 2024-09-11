import DBconnection from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";
import { NextResponse } from "next/server";


export async function GET() {   //how many users are login in this...
    await DBconnection();

    try{
        const users = await UserModel.find({role:{$ne:'admin'}} , {password:0})  //secret to (securing) passwords and admin details
        if (!users || users.length === 0){
            return NextResponse.json({success:false, message:'no users found'},{status:404})
        }
        return NextResponse.json({success:true,users}, {status:200});
    }catch(error){
        console.log("Error fetching users:", error);
        return NextResponse.json({success:false, message:'failed to get users'},{status:500})  //internal server error:500
    }
}