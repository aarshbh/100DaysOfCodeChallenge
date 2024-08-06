import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    price: {
        type : Number,
        default: 0,
    },
    stock: {
        default: 0,
        type: Number,
    },
    productImage: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
    
},{timestamp: true})

export const Product = mongoose.model("Product",productSchema)