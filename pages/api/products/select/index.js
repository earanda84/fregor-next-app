import connection from "@ericadl/database/connection"
import { Products } from "@ericadl/models/Products";


export default async function getProducts(req, res){
    await connection();

    try {
        const products = await Products.find({})

        return res.status(200).json({
            status: "success",
            message: "Successfully request",
            products
        })

    } catch (error) {
        console.log(error)

        return res.status(404).json({
            status: "error",
            message: "Not found."
        });
    }
}