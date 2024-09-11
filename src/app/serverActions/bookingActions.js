"use server"
import { auth } from "../auth";
import DBconnection from "../utils/config/db";
import BookingModel from "../utils/models/Bookings";
import UserModel from "../utils/models/User";


export async function bookingActions(bookingDetails) {
    await DBconnection();

   const session =await auth()
   console.log("user email check",session.email);
   
   try {
    const user = await UserModel.findOne({ email: session.email });

       if(!user){
        return { success:false ,message: "User not found" };
       }
       const userId=user._id.toString()
        console.log("booking checked",bookingDetails);
        const booking = await BookingModel.create({
         //const userBookingDetails = await BookingModel.create({
           startDate: bookingDetails.selectedDates.startDate,
           endDate: bookingDetails.selectedDates.endDate,
           productName: bookingDetails.record.title,
           price: bookingDetails.record.price,
           offer: bookingDetails.record.offer,
           image: bookingDetails.record.image,
         });
         await UserModel.findByIdAndUpdate(
           userId,
           { $push: { bookings: booking._id } }, //this is populated in api/users/[id]/route.js
           { new: true }
         );
         return { success: true }
    
   } catch (error) {
     console.log(error);
     return {success:false,message:"failed to create booking"}
   }
}
