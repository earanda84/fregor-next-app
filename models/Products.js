import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
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
    },
    image: {
        type: String,
        default: () => {
            const img = "default.png" ||  this.image;            
            return img;
        }
    },
    category:[{
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: false,
    }]
});

const Products = models.products || model('products', ProductSchema, 'products');


module.exports =  {
    Products
};
