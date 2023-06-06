import { DashboardLayout } from "@ericadl/components/DashboardLayout";
import { useRouter } from "next/router";
import { useState } from "react";

const Dashboard = () => {
    const router = useRouter();
    const { user } = router.query;

    const [categorieName, setCategorieName] = useState('');
    const [categorieDecription, setCategorieDescription] = useState('');


    return (
        <>
            {/* <DashboardLayout /> */}
            <div className="text-center bg-indigo-900 h-screen">
                <DashboardLayout user={user}/>
                
            </div>
        </>
    )
}

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