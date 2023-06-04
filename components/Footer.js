import Image from "next/image";
import logo from "../public/logo-fregor.png"
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="text-white bottom-0 left-0 z-20 w-full p-4 bg-[#c07440] border border-lime-600/10 rounded-md border-t shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href={'#nav'} className="flex items-center mb-4 sm:mb-0">
                                <Image
                                    className="h-12 mr-3 sm:h-12"
                                    src={logo}
                                    // className="h-8 mr-3"
                                    alt="Logo Fregor"
                                    width={45}
                                    height={50}
                                />
                                <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                                    Fregor
                                </span>                         
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://fregor-next-app.vercel.app/about" className="mr-4 hover:text-[#F1C40F] md:mr-6 ">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="https://fregor-next-app.vercel.app/policies" className="mr-4 hover:text-[#F1C40F] md:mr-6">
                                    Politicas de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="https://fregor-next-app.vercel.app/blog" className="mr-4 hover:text-[#F1C40F] md:mr-6 ">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="https://fregor-next-app.vercel.app/contacto" className="hhover:text-[#F1C40F]">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-white sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a href="https://fregor-next-app.vercel.app/about" className="hover:text-[#F1C40F]">
                            Fregor™
                        </a>
                        . Todos los derechos reservados.
                    </span>
                </div>
            </footer>
        </>

    );
}
