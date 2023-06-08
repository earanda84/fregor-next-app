import  connection  from "@ericadl/database/connection";

import { Categories } from "@ericadl/models/Categories";
import { Products } from "@ericadl/models/Products";


export default async function deleteCategorie(req, res) {
    await connection()

    let { id } = req.query;

    if(req.method !== "DELETE") {
        return res.status(405).json({status: "error", message:'Method not Allowed'});
    }

    try {

        // category to delete
        let categoryToDelete = await Categories.findOneAndDelete({ _id: id });

        if(!categoryToDelete) {
            return res.status(404).json({status: "error", message: 'The category does not exist.'});
        }

        await Products.updateMany(
            { category: categoryToDelete._id },
            { $set: { category: null } },
        )


        return res.status(200).json({
            status: "success",
            message: "Category deleted successfully.",
            categorie_deleted: categoryToDelete,

        })

    } catch (error) {
        
        return res.status(404).json({
            status: "error",
            message: "Failed to delete the category.",
            error
        })
    }
}