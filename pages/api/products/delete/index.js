import connection from "@ericadl/database/connection";

import { Products } from "@ericadl/models/Products"



export default async function deleteProduct(req, res) {
    await connection();

    const { id } = req.query;

    if(req.method !== "DELETE"){
        return res.status(405).json({
            status: "error",
            message: "Method Not Allowed",
        });
    };


    try {
        const productToDelete = await Products.findOneAndDelete({ _id: id});

        if(!productToDelete){
            
            return res.status(404).json({
                status: "error",
                message: "The product does not exist."
            });
        };

        return res.status(200).json({
            status: "success",
            mesage: "Product deleted successfully.",
            product_deleted: productToDelete,
        });

    } catch (error) {
        console.log(error)

        return res.status(404).json({
            status: "error",
            message: "Failed to delete the product",
            error
        })
    }
}