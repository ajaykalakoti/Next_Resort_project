
"use client";

import CalenderComponent from "@/app/components/CalenderComponent";
import UserNavigation from "@/app/components/UserNavigation";
import { bookingActions } from "@/app/serverActions/bookingActions";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicProduct = () => {
  const [record,setRecord]=useState("");

  const [selectedDates,setSelectDates] = useState(null)

  const params = useParams();
  const { id } = params;
  console.log("dynamic ClientId:", id);

  const dynamicProductHandler =async()=>{
    const response = await fetch(`/api/admin/product/${id}`);
    const newData = await response.json();

    console.log("dynamic data:",newData);
    setRecord(newData.data);
  }
useEffect(()=>{
    dynamicProductHandler()
},[])

const bookingHandler = async ()=>{
   if(!selectedDates){
    alert("Please select booking dates")
    return
   }
  //console.log("booking details" ,record);
  const bookingDetails ={record,selectedDates}
  try {
    const response = await bookingActions(bookingDetails)  
    if(response.success){
      alert("Booking Successfull")  //booking success alert msg
    }
  } catch (error) {
    // console.log(error);
  }
}
  const handleDateSelect = (dates)=>{
      setSelectDates(dates)
      console.log("dates coming from calender component",dates);
  }


  return (
    <div>
      <UserNavigation />
      <CalenderComponent onDatesSelect={handleDateSelect}/>
      <Link href="/">
        <p align="center">Go Back</p>
      </Link>
      {record ? (
        <div className="">
          <div className="singleSection">
            <div className="singleLeft">
              <div className="">
                <h2>{record.title}</h2>
              </div>
              <img
                src={record.image}
                alt={record.title}
                className="singleImage"
              />
            </div>
            <div className="singleCenter">
              <div className="singlePrice">Rs.{record.price}</div>
              <p className="singleDesc">{record.desc}</p>
              <div className="">
                {record.amen.map((item, i) => {
                  return (
                    <div className="singleAmen" key={i}>
                      <span>*</span>
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="offer">
                <span>*</span>
                <button>Discount :{record.offer}%</button>
              </div>
              <div className="singleBtn">
                <button className="" onClick={bookingHandler}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
          Loading...
        </h1>
      )}
    </div>
  );
};
export default DynamicProduct;