import { Categories } from "@ericadl/models/ModelsDB"

export default async function updateCategorie(req,res) {
    let {id} = req.query;
    let parameters = req.body;

    try {
        
        const response = await Categories.findByIdAndUpdate({_id : id}, parameters, {new: true})    
        
        return res.status(200).json({status:"success", message:"Updated categorie successfully", categorie_updated: response})

    } catch (error) {
        console.log(error)
        return res.status(404).json({status:"error", message: "Something wrong to update this categorie", error})
    }  

}