import { NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongodb";
import Product from "@/app/models/Product";


/**
 * will convert API class for Products 
 * @param req 
 * @returns products based on categories
 */
export async function GET(req: Request) {
    
    await connectMongo();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), {status: 200});
    
}

// FUNCTION TO SAVE DATA FROM USER TO MONGODB
export async function POST(req: Request) {
    await connectMongo();
    const data = await req.json();
    const newProduct = new Product(data);
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 200})
}