import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect, use } from "react";
import { supabase } from "../utils/supabase";

export default function App({ Component, pageProps, children }) {
  const [session, setSession] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    try {

      setSession(supabase.auth.session())
      supabase.auth.onAuthStateChange((_event, session)=>{
      setSession(session)
  
    })
    } catch (error) {
      setError(error)
    }
  },[])

  return (
    <>
      <Head>
        <title>Tienda Fregor | Frutos secos y Recetas saludables</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Tienda de Frutos Secos Fregor: los mejores frutos secos con la mejor calidad y los mejores snack saludables y recetas saludables !Envíos a todo Chile!"
        />
        <meta name="author" content="Fregor Frutos Secos"/>
        <meta name="copyright" content="Fregor Frutos Secos"/>
        <meta name="country" content="CHL"/>
        <meta name="language" content="es-CL"/>
        <meta name="keywords" content="frutos secos, frutos,frutos secos saludables, frutos saludables, almendras, nueces, pistachos, snack, snack saludables"/>
        <meta name="robots" content="index, follow"/>
        <meta name="currency" content="CLP"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Tienda Fregor | Frutos Secos, Recetas Saludables y Muhco más"/>
        <meta property="og:url" content="https://www.fregor.cl/"/>
        <meta property="og:description" content="Tienda de Frutos Secos Fregor: los mejores frutos secos con la mejor calidad y los mejores snack saludables y recetas saludables !Envíos a todo Chile! "/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  */}
        <Component {...pageProps} session={session} />
        {children}
    
    </>
  );
}
