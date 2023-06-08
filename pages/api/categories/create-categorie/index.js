import { Categories } from "@ericadl/models/Categories";
import  connection  from "@ericadl/database/connection";

export default async function createCategorie(req, res) {
  await connection()

  // Pending tu upload image to storage from frontend
  
  if(req.method !== "POST") res.status(405).json({error: "Method not allowed"});

  const parameters = req.body;

  try {
    // validate categorie if exists on db
    const categorieExist = await Categories.findOne({name: parameters.name})

    console.log('Category exists => ',categorieExist);

    if (categorieExist) {
      return res
        .status(409)
        .json({ status: "error", message: "El recurso ya existe." , categoria_existente: categorieExist});
    }

    const categoria = new Categories({...parameters, url: parameters.name.toLowerCase().replace(/\s+/g,'-')});

    const response = await categoria.save();

    console.log('Categoria Agregada => ', response)

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
