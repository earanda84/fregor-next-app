import connection from "@ericadl/database/connection";

import { Products } from "@ericadl/models/Products";
import { Categories } from "@ericadl/models/Categories"


export default async function createProduct(req, res) {
    await connection();

    const parameters = req.body;
    // console.log('Los parametros ==> ', parameters)

    if (req.method !== "POST") res.status(405).json({ error: "Method not allowed" });

    try {
        // If product Exists
        const productExist = await Products.findOne({ name: parameters.name });
        console.log('El producto existe ==> ', productExist)

        if (productExist) {
            
            return res.status(409).json({ 
                status: "error",
                message: "Product already exists", 
                productExist 
            });
        }

        // Calling to Categories Model, for to assing id at product model, and generate the categorie dependency
        const category = JSON.parse(parameters.categories);

        const categoryId = await Categories.findOne({ name: { $in: category } })

        // Create product
        const product = new Products({...parameters, category: categoryId});

        const response = await product.save()

        // console.log('Producto Creado  ==> ', response)

        return res.status(200).json({ status: "success", message: "Producto creado con éxito", response })

    } catch (error) {
        // console.log(error)

        return res.status(404).json({ status: "error", message: "Error try to obtain this product", error })
    }

}