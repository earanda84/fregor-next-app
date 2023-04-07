import Head from "next/head"
import { useState, useEffect } from "react"
import NavBar from "@ericadl/components/NavBar"

export default function About(params) {
  const title = 'Acerca de nosotros'
  const [categories, setCategories] = useState([])

  // console.log(params)
  // useEffect(()=>{
  //   setCategories(NavBar)
  // },[])

  return (
    <div>
      <Head>
        <title>{!title ? 'Fregor' : `Fregor | ${title}`}</title>
      </Head>
      <h1 className="text-center text-green-600 text-3xl">Acerca de nostros</h1>
      <h1 className="text-center text-green-600 text-3xl">Acerca de nostros</h1>
    </div>
  )
}
