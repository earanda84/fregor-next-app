import "flowbite";
import { useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import logo from "../public/logo-fregor.png"; //Change when deploy it's starter
import Link from "next/link";
import { Button } from "flowbite-react";
import ModalLogin from "./Modal";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function NavBar({categories}) {
  
  const [ modalOn, setModalOn ] = useState(false)
  const [ choice, setChoice ] = useState(false)

  function click(){
    setModalOn(true)
  }
  return (
    <>
    {/* Header */}
    {/* <header className="hidden md:grid md:bg-lime-700/30 md:px-20 py-1">
      
        <p onClick={click} className='cursor-pointer px-5 py-3 text-xl mx-auto bg-transparent border-transparent text-gray-500 hover:bg-lime-700/50 hover:text-white focus:pointer-events-auto rounded-md' >
          Ingresa a tú cuenta
        </p>

        {modalOn && <ModalLogin setModalOn={setModalOn} setChoice={setChoice} />}

      </header> */}
      {/* Nav */}
      <nav
        className={`${roboto.className} flex fixed top-0 z-10 w-full bg-[#c07440] border border-lime-600/10 px-5 py-2 sm:px-10 sm:py-3 dark:bg-gray-900`}
      >
        
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"} className="flex items-center">
            <Image
              className="h-24 mr-3 sm:h-24"
              src={logo}
              width={"100"}
              height={"50"}
              alt="logo-fregor"
            />       
          </Link>

          {/* Search option */}
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Búsqueda ..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Categories from NavBar*/}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full px-3 pl-10 text-sm md:mx-auto md:text-md md:py-4 md:text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-700/50 focus:border-lime-700/50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Busqueda..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:mt-0 md:text-xl md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              { categories?.map(categorie => (
              <li key={categorie.id} className="cursor-pointer md:px-3">
                <Link
                  href={`https://fregor-next-app.vercel.app/categories/${categorie.url}`}
                  className="flex py-3 px-3 text-white hover:text-[#F4D03F]"
                  aria-current="page"
                >                 
                  {categorie.name}
                </Link>
              </li>))}
              <li  className="cursor-pointer flex mt-6 py-3 rounded-lg bg-lime-600/30 text-gray-600/90 text-lg hover:bg-lime-600/50 justify-items-stretch md:hidden">
                <p onClick={click} className="text-center mx-auto">Ingresa a tú cuenta</p>
              </li>
              {modalOn && <ModalLogin setModalOn={setModalOn} setChoice={setChoice} />}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
