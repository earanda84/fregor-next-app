import { Schema, model, models } from "mongoose";

const CategorieSchema = new Schema({
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
        default:() => {
            const img = "default.png" ||  this.image;            
            return img;
        }
    },
    url:{
        type: String,
        default: function() {
            const parameter = this.url || '';
            return parameter;
        }
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // products:{
    //     type:String,
    //     default:"Por definir arreglo de productos"
    // }
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref:"Product",
    //     required: false,
    // }],
    
});

const Categories = models.categories || model("categories", CategorieSchema, "categories");


module.exports ={
    Categories
}