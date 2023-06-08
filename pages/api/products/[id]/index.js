import { Products } from "@ericadl/models/Products"

export default async function updateProduct(req, res){
    let { id } = req.query

    let parameters = req.body

    if(req.method !== "PUT") {
        return res.status(405).end('Method not Allowed')
    };

    try {
        
        const response = await Products.findByIdAndUpdate({_id: id}, parameters, {new: true});

        return res.status(200).json({
            status : "success",
            message: "Resource updated successfully",
            resource_updated: response
        })

    } catch (error) {
        console.log(error)

        return res.status(404).json({
            status: "error",
            message: "Resource not updated.",
        })
    }
}