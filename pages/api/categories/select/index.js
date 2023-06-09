// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from "@ericadl/database/connection"
import { Categories } from "@ericadl/models/Categories"

export default async function handler(req, res) {

  await connection()

  if(req.method !== "GET"){
    return res.status(409).json({error: "Method not allowed"})
  }
  
  try {

    const categories = await Categories.find({}).sort({name : 1}).exec()

    res.status(200).json({ 
      message: "success", 
      categories 
    });
  } catch (error) {
    console.log(error)
  }
}
