import Head from "next/head";
import logo from "../public/logo-fregor.png"
import Link from "next/link";
import Image from "next/image";


export default function Products({categories}) {

  const title = "Productos";
  return (
    <>
      <Head>
        <title>{!title ? "Fregor" : `Fregor | ${title}`}</title>
      </Head>
      {categories.categories.map(categorie => (
        <div key={categorie.id}className="container text-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={'/products'}>
            <Image
              src={`/${categorie.image}`}
              width={100}
              height={100}
              alt={categorie.image}  
            >
            </Image>
          </Link>
          {/* cards */}
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {categorie.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {categorie.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      ))}
      
    </>
  );
}

// export async function getStaticPath(){

// }


export async function getServerSideProps(context){

try {
  
  const request = await fetch(process.env.API_URL_GET_CATEGORIES, {
    method:"GET", 
    headers:{"Content-Type":"application/json"}
  });

  const response = await request.json();

  return {
    props:{
      categories: response,
    },
  };

} catch (error) {
  console.log("Error al obtener las categorias",error)
  return {
    props:{
      categories: []
    }
  }
}
  
}