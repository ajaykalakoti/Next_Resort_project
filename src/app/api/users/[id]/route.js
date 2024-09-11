import DBconnection from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";
import BookingModel from "@/app/utils/models/Bookings";
import { NextResponse } from "next/server";


export async function GET(request,{params}) {   //creating dynamic route in every user by only ID
    await DBconnection();

    const {id}=params       //getting single user data by using routes

    console.log("dynamic Id: ",id);

 try{
     if(!id){
         return NextResponse.json({ success: false, message:'no users found' }, { status: 404 });
     }
      const user = await UserModel.findById(id).populate("booking"); //this booking is comes from serverActions/bookingActions.js  //user model
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },{ status: 404 });
      }
     return NextResponse.json({success:true,data:user})
    }catch(error){
        console.log(error);
        return NextResponse.json({success:false,message:"id is missing"})
    }
}


