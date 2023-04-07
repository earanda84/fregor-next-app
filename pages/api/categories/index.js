// import db from "../../../utils/db"
import { supabase } from "../../../utils/supabase"


export default async function categoriesHandler(req, res) {
  //GetUser with credentials
  
  
    let { data: categories, error } = await supabase
      .from("categories")
      .select("*");
      
    let {data} = await supabase
      .from("categories")
      .select(`
        user
      `)

      // console.log(data)

      res.status(200).json({ message: "APi routes Categories", categories })

}