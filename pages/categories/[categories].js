import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

export default function Categories() {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const router = useRouter()

  console.log('useROuterrrrrr',router)

  useEffect(()=>{
    try {
      setLoading(true)
      fetch('/api/categories')
      .then(response => console.log('LA RESPONSE DE FETCH API CATEGORIES',response))
      .then(data => {
        setData(data)
        setLoading(false)
      }).catch(error => setError(error))
    } catch (error) {
     setError(error) 
    }
  },[])

  if(error) return Swal.fire({
    icon:'warning',
    text:error,
    confirmButtonText:'Ok'
  })

  if(loading) return <p className="text-decoration-color: #f87171">Loading...</p>

  return (
    <div>
       <Head>
        {/* <title>{!title ? '' : `Tienda Fregor | ${title}`}</title> */}
        {/* {data.map(categorie => <title key={data.id}>{categorie.name}</title>)} */}
      </Head>
      <div>Ruta de las categories</div>
    </div>
  )
}

export async function getServerSideProps(context){

  

console.log('El CONTEXT QUERY',context.query.categories)
console.log('El CONTEXT resolvedURL ',context.resolvedUrl)

  return{
    props:{

    }
  }
}


// Tip pro:
// Cuando consulten múltiples endpoints (en lugar de distintas promesas pueden utilizar una única)
// const [exercise, dataMenu] = await Promise.all([
//     axios.get(
//       `https://tutorial-interactivo-sql.onrender.com/api/v1/categories/${context.params.category_id}/exercises/${context.params.exercise_id}`
//     ),
//     axios.get(
//       "https://tutorial-interactivo-sql.onrender.com/api/v1/categories/menu"
//     ),
//   ]);