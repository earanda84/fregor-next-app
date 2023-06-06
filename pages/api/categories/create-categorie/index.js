// import {  Categories, Productos } from "@ericadl/models/ModelsDB";
import { Categories } from "@ericadl/models/ModelsDB";
//import { connection } from "@ericadl/database/connection";

export default async function createCategorie(req, res) {
  const parameters = req.body;

  try {
    // validate categorie if exists on db
    const categorieExist = await Categories.findOne({name: parameters.name})

    console.log(categorieExist);

    if (categorieExist) {
      return res
        .status(409)
        .json({ status: "error", message: "El recurso ya existe." , categoria_existente: categorieExist});
    }

    const categoria = new Categories(parameters);

    const response = await categoria.save();

    return res.status(200).json({
      status: "success",
      message: "Exito al crear la categoria",
      response,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "Error al crear la categoria",
      error: error.message,
    });
  }
}
