import { NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongodb";
import Product from "@/app/models/Product";


// FUNCTION TO GET ALL PRODUCTS FROM MONGODB
export async function GET(req: Request) {
    try {
        await connectMongo();
        const products = await Product.find();
        return new NextResponse(JSON.stringify(products), { status: 200 });

    } catch (error) {
        return new NextResponse(`Error in fetching products ${error}`)
    }
    
}

// // FUNCTION TO SAVE DATA FROM USER TO MONGODB
// export async function POST(req: Request) {
//     await connectMongo();
//     const data = await req.json();
//     const newProduct = new Product(data);
//     await newProduct.save();
//     return new Response(JSON.stringify(newProduct), { status: 200})
// }