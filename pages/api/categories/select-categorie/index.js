// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from "@ericadl/database/connection"
import { Categories } from "@ericadl/models/ModelsDB"

export default async function handler(req, res) {
  await connection()
  
  try {
    const categories = await Categories.find({})
        
    res.status(200).json({ message: "success", categories })
  } catch (error) {
    console.log(error)
  }
}
