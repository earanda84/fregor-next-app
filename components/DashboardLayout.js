import { use, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
    RiDashboardLine,
    RiLogoutBoxLine,
    RiCloseLine,
    RiMenu3Fill,
    RiNotification2Line,
    RiArrowDownSLine,
    RiSearch2Line,
    RiCheckboxBlankCircleFill,
    RiFilter3Line,
    RiMapPinRangeLine,
    RiDropboxFill
} from "react-icons/ri";

import logo from "../public/logo-fregor.png";
import imgSidebar from "../public/assets/img/img-sidebar.svg";

export const DashboardLayout = ({ user, data }) => {
    const [sidebar, setSidebar] = useState(false);
    // console.log(user, data);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            {/* Sidebar */}
            <div
                className={`fixed lg:static w-[75%] md:w-[40%] lg:w-full top-0 z-40 bg-white transition-all ${sidebar ? "-left-0" : "-left-full"
                    } w-full h-full overflow-y-auto col-span-1 p-8 border-r`}
            >
                {/* Logo */}
                <div className="text-center p-8">
                    {/* <Image src={logo} alt="logo-fregor" width={50} height={50} /> */}
                    <h1 className="uppercase font-bold tracking-[4px]">tu logo</h1>
                </div>
                <div className="flex flex-col justify-between h-[550px] ">
                    {/* Menu */}
                    <nav>
                        <ul className="pt-4">
                            {data.categories.map((category) => (
                                <li key={category._id}>
                                    <Link
                                        href={"#"}
                                        className="flex items-center gap-4 hover:bg-purple-600 duration-300 px-2 py-3 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold"
                                    >
                                        <RiDashboardLine />
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* image and logout */}
                    <div className="flex flex-col gap-4 pb-5">
                        <Image
                            src={imgSidebar}
                            alt="img-sidebar"
                            width={250}
                            height={250}
                        // className="text-center rounded-lg"
                        />

                        <Link
                            href={"#"}
                            className="flex items-center gap-4 hover:bg-purple-600 px-2 py-3 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold duration-300"
                        >
                            <RiLogoutBoxLine />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            {/* Button show sidebar mobile */}
            <button
                onClick={handleSidebar}
                className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 text-white rounded-full text-3xl z-40"
            >
                {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            {/* Content */}
            <div className="col-span-5">
                {/* Header */}
                <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:pl-12 w-full">
                    {/* Search */}
                    <form className="w-full md:[40%] lg:w-[30%] order-1 md:order-none">
                        <div className="relative">
                            <RiSearch2Line className="absolute left-2 top-3" />
                            <input
                                type="text"
                                className="bg-slate-100 py-2 pl-8 pr-4 outline-none border-none rounded-lg w-full"
                                placeholder="Buscar"
                            />
                        </div>
                    </form>
                    {/* Notifications */}
                    <nav className="w-full md:[60%] lg:w-[70%] flex justify-center p-4 md:justify-end">
                        <ul className="flex items-center gap-1">
                            <li>
                                <Link href={"#"} className="relative">
                                    <RiNotification2Line />
                                    <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500" />
                                </Link>
                            </li>
                            <li className="group-hover:bg-[#ec7c6a] group-hover:text-white ">
                                <Link href={"#"} className="flex items-center capitalize">
                                    {user} <RiArrowDownSLine />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* Content */}
                <main className="p-4 md:p-8 lg:p-12 bg-gray-100">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold capitalize">{user}</h1>
                    </div>
                    {/* Content Search */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
                        <form className="grid-col-1 md:col-span-2">
                            <div className="relative">
                                <RiSearch2Line className="absolute left-2 top-3 text-purple-600" />
                                <input
                                    type="text"
                                    className="bg-white py-2 pl-8 pr-4 outline-none border-none w-full"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                        <form className="col-span-1">
                            <div className="relative">
                                <RiMapPinRangeLine className="absolute left-2 top-3 text-purple-600" />
                                <select
                                    type="text"
                                    className="bg-white py-2 pl-8 pr-4 outline-none border-none w-full"
                                    placeholder="Search"
                                >
                                    <option>Anywhere</option>
                                    <option>Anywhere2</option>
                                </select>
                            </div>
                        </form>
                        <form className="col-span-1">
                            <div className="relative">
                                <RiFilter3Line className="absolute left-2 top-3 text-purple-600" />
                                <input
                                    type="text"
                                    className="bg-white py-2 pl-8 pr-4 outline-none border-none w-full"
                                    placeholder="Filters"
                                />
                                <span className="absolute text-sm text-semibold bg-purple-600 rounded-full py-[4px] px-[9px] text-white font-semibold right-2 top-[6px]">4</span>
                            </div>
                        </form>
                    </div>
                    {/* Cards T*/}
                    <div className="flex items-center flex-wrap gap-4 mb-20">
                        <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
                            <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                                <RiCloseLine />
                            </button>{" "}
                            <span className="text-gray-500">Design</span>
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
                            <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                                <RiCloseLine />
                            </button>{" "}
                            <span className="text-gray-500">Regular</span>
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
                            <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                                <RiCloseLine />
                            </button>{" "}
                            <span className="text-gray-500">Full Time</span>
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
                            <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                                <RiCloseLine />
                            </button>{" "}
                            <span className="text-gray-500">B2B</span>
                        </span>
                        <button className="text-gray-500 ml-4">Clear all</button>
                    </div>
                    {/* Results */}
                    <div className="flex items-center justify-between mb-7">
                        <p className="text-gray-500">
                            {"We've found"} <span className="text-purple-600 font-bold">523</span> jobs!
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 ">Sort by: <span className="text-purple-600 font-bold hover:cursor-pointer"> Date</span>
                            <RiArrowDownSLine />
                        </p>
                    </div>

                    {/* Cards */}
                    <Link href={'#'} className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600/50 transition-colors duration-500 mb-8">
                        {/* Icon */}
                        <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                            <RiDropboxFill className="text-7xl bg-purple-100 p-4 text-purple-600 rounded-md" />
                        </div>
                        {/* Card Title */}
                        <div className="w-full md:w-[70%]">
                            <h1 className="text-xl flex items-center gap-4 mb-2">UX Designer <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold rounded-md">Remote</span> <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold rounded-md">Sketch</span>
                            </h1>
                            <p className="text-gray-500">Dropbox ---- Warzawa</p>
                        </div>
                        {/* Time */}
                        <div className="w-full md:w-[20%] flex flex-col items-end">
                            <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLN</h3>
                            <p className="text-gray-500">2 days ago</p>
                        </div>
                    </Link>

                    <Link href={'#'} className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600/50 transition-colors duration-500 mb-8">
                        {/* Icon */}
                        <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                            <RiDropboxFill className="text-7xl bg-purple-100 p-4 text-purple-600 rounded-md" />
                        </div>
                        {/* Card Title */}
                        <div className="w-full md:w-[70%]">
                            <h1 className="text-xl flex items-center gap-4 mb-2">UX Designer <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold rounded-md">Remote</span> <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold rounded-md">Sketch</span>
                            </h1>
                            <p className="text-gray-500">Dropbox ---- Warzawa</p>
                        </div>
                        {/* Time */}
                        <div className="w-full md:w-[20%] flex flex-col items-end">
                            <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLN</h3>
                            <p className="text-gray-500">2 days ago</p>
                        </div>
                    </Link>
                    <Link href={'#'} className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600/50 transition-colors duration-500 mb-8">
                        {/* Icon */}
                        <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                            <RiDropboxFill className="text-7xl bg-purple-100 p-4 text-purple-600 rounded-md" />
                        </div>
                        {/* Card Title */}
                        <div className="w-full md:w-[70%]">
                            <h1 className="text-xl flex items-center gap-4 mb-2">UX Designer <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold rounded-md">Remote</span> <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold rounded-md">Sketch</span>
                            </h1>
                            <p className="text-gray-500">Dropbox ---- Warzawa</p>
                        </div>
                        {/* Time */}
                        <div className="w-full md:w-[20%] flex flex-col items-end">
                            <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLN</h3>
                            <p className="text-gray-500">2 days ago</p>
                        </div>
                    </Link>
                    <Link href={'#'} className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600/50 transition-colors duration-500 mb-8">
                        {/* Icon */}
                        <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                            <RiDropboxFill className="text-7xl bg-purple-100 p-4 text-purple-600 rounded-md" />
                        </div>
                        {/* Card Title */}
                        <div className="w-full md:w-[70%]">
                            <h1 className="text-xl flex items-center gap-4 mb-2">UX Designer <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold rounded-md">Remote</span> <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold rounded-md">Sketch</span>
                            </h1>
                            <p className="text-gray-500">Dropbox ---- Warzawa</p>
                        </div>
                        {/* Time */}
                        <div className="w-full md:w-[20%] flex flex-col items-end">
                            <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLN</h3>
                            <p className="text-gray-500">2 days ago</p>
                        </div>
                    </Link>
                </main>
            </div>
        </div>
    );
};

{
    /* <div className="border grid grid-rows-3 grid-flow-col gap-0 h-screen">
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
  </div> */
}
