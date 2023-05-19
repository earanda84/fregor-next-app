import { supabase } from "@ericadl/utils/supabase";

export default async function usersHandler(req,res){

    
    let { data: users, error } = await supabase
      .from("users")
      .select("*");
    // console.log(users,error)


    res.status(200).json({message:'RUta de la Usuarios',users:users})
}