import React,{useEffect, useState} from 'react'

import { supabase } from '../utils/supabase'

export default function Home() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function getCategories(){
      try {
        const { data:categories, error } = await supabase.from('categories').select('*')
        setData(categories)
      } catch (error) {
        setError(error)
      }
    }
    getCategories()
  },[])


  return (
    <div>
      {data && data.map((categorie) => <h1 key={data.id} className='text-sky-600 underline text-2xl text-center pt-6'>{categorie.name}</h1>)}
    </div>
  )
}
