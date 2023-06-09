import { use, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { RiDashboardLine, RiLogoutBoxLine, RiMenu3Fill, RiCloseLine} from "react-icons/ri"

import logo from "../public/logo-fregor.png"
import imgSidebar from "../public/assets/img/img-sidebar.svg"

export const DashboardLayout = ({ user, data }) => {

    const [sidebar, setSidebar] = useState(false)
    console.log(user, data)

    const handleSidebar = ()=>{
        setSidebar(!sidebar)
    }
    
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            {/* Sidebar */}
            <div className={`fixed lg:static top-0 ${sidebar ? '-left-0 transition-all' : '-left-full'} w-full overflow-y-scroll col-span-1 p-8 border-r`}>
                {/* Logo */}
                <div className="text-center p-8 bg-green-300">
                    {/* <Image src={logo} alt="logo-fregor" width={50} height={50} /> */}
                    <h1 className="uppercase font-bold tracking-[4px]">tu logo</h1>
                </div>
                <div className="flex flex-col justify-between h-[550px]">
                    {/* Menu */}
                    <nav>
                        <ul className="pt-4">
                            {data.categories.map((category) => (
                                <li key={category._id}>
                                    <Link href={'#'}
                                        className="flex items-center gap-4 hover:bg-purple-600 px-2 py-3 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold duration-300">
                                        <RiDashboardLine />
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* image and logout */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src={imgSidebar}
                            alt="img-sidebar"
                            width={200}
                            height={200}
                            // className="text-center rounded-lg"
                        />

                        <Link
                            href={'#'}
                            className="flex items-center gap-4 hover:bg-purple-600 px-2 py-3 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold duration-300"
                        >
                            <RiLogoutBoxLine />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            {/* Button show sidebar mobile */}
            <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-purple-600/75 text-white rounded-lg text-4xl">
                <RiMenu3Fill />
            </button>
            {/* Content */}
            <div className="grid col-span-5">holi2</div>
        </div>
    );
};


{/* <div className="border grid grid-rows-3 grid-flow-col gap-0 h-screen">
{data.categories.map(category =>(
    <div key={category._id} className="row-span-3  mt-[50px] ...">
    <section className="border row-start-auto">
        <button className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {category.name}
            </span>
        </button>
    </section>
</div>
))}
<div className="col-span-2 border ..">
    <h1 className="text-center uppercase">Bienvenid@ {user}</h1>
</div>
<div className="row-span-2 border col-span-2 ...">03</div>
</div> */}