import DBconnection from "@/app/utils/config/db";
import ProductModel from "@/app/utils/models/Product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  //creating dynamic route in every product by only ID
  await DBconnection();

  const { id } = params; //getting single product data by using routes

  console.log("dynamic Id:", id);

  try {
    if (!id) {
      return NextResponse.json(
        { success: false, message: "no product found" },
        { status: 404 }
      );
    }
    const product = await ProductModel.findById(id); //product model

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "id is missing" });
  }
}
