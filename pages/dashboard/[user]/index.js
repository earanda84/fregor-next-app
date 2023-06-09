'use client'

import { DashboardLayout } from "@ericadl/components/DashboardLayout";
import { LoadingSpinner } from "@ericadl/components/LoadingSpinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const router = useRouter();
    const { user } = router.query;

    const [ categories, setCategories ] = useState(undefined);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(()=>{
        const fetchData = async() => {
            setIsLoading(true)
            try {
                const response = await fetch('/api/categories/select',{
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json",                        
                    }
                })
                // console.log(response)
                
                if(response.status !== 200){
                    return response.json({status: response.status})
                }
                
                const data = await response.json()
                
                setCategories(data)
                
                setIsLoading(false)

            } catch (error) {                
                
                setError('Error al cargar las categorias.',error)

                setIsLoading(false)
            }

        }

        fetchData()
    },[])

    if(error){
        return (<h1>{error.message}</h1>)
    }

    return (
        <div>
            {categories ? (
                // <div className="border">
                //     {categories.categories.map(element => (<h1 className="text-center pt-10 text-2xl uppercase" key={element._id}>{element.name}</h1>))}
                // </div>
                <DashboardLayout user={user} data={categories}/>
            ) : (<LoadingSpinner isLoading/>)}
        </div>
    )
}

// <p className="text-center text-2xl font-bold">{isLoading}</p>

export default Dashboard;

// export async function getStaticPaths(){

//     const {productsCategories} = await fetch(process.env.API_URL_GET_CATEGORIES)
// console.log(productsCategories)
//     // const allPaths = productsCategories.map((path)=>{
//     //     console.log(path)
//     //     return {
//     //         params:{
//     //             cat:path.name
//     //         }
//     //     }
//     // });
//     // console.log(allPaths)
// }

// export async function getServerSideProps(){

//     try {
        
//         return {
//             props:{

//             }
//         }
//     } catch (error) {
//         return {
//             props:[]
//         }
//     }
// }