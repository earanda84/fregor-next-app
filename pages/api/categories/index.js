// import {  Categories, Productos } from "@ericadl/models/ModelsDB";
import { Categories } from "@ericadl/models/ModelsDB"
import {connection} from "@ericadl/database/connection"


export default async function index(req, res) {
    connection()
    const parameters = req.body;

    try {
        const categoria = new Categories(parameters);

        const response = await categoria.save();

        return res.status(200).json({
            status:"success",
            message:"Exito al crear la categoria",
            response
        })

    } catch (error) {
        return res.status(404).json({
            status:"error", message:"Error al crear la categoria",error: error.message
        });
    }

}
