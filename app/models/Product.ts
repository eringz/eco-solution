import mongoose, { Document, Schema } from 'mongoose';


export interface IProduct extends Document {
    _id:            string;
    name:           string;
    price:          number;
    description:    string;
    imageUrl:       string;
}

const ProductSchema: Schema = new Schema({
    name:           { type: String, required: true },
    price:          { type: Number, required: true },
    description:    { type: String, required: true },
    imageUrl:       { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
export default Product;