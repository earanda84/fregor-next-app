
import Image from "next/image"
import logo from "../public/logo-fregor.png"
export default function CardContent({ categories }) {

  console.log('LAS PROPS CARDS vienen de getServerSideProps INDEx', props)
  return (
    <>
      {categories?.map(categorie => (
        categorie ?
        <div  key={categorie.id} className="container justify-evenly">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <Image class="w-full" alt="Logo fregor" /> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{categorie.name}</div>
              <p class="text-gray-700 text-base">
                {categorie.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div> </div>: <></>
      ))}
    </>
  )
}
