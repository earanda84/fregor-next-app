import { Schema, model, models } from "mongoose";

const ProductSchema = Schema({
    name: {
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    description:{
        type: String,
        image: String,
    }
});

const CategorieSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default:"default.png",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // products:{
    //     type:String,
    //     default:"Por definir arreglo de productos"
    // }
    products: [{
        type: Schema.Types.ObjectId,
        ref:"Product",
        required: false,
    }],
    
});

// Model ofr Product
// export const Productos = model("producto",ProductSchema,"producto");

const Categories = models.categories || model("categories", CategorieSchema, "categories");


module.exports ={
    // Productos,
    Categories
}