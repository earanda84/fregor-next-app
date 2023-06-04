//import 'flowbite'
import React, { useEffect, useState } from 'react';
// import { Dialog } from '@headlessui/react';

import Link from 'next/link';
import Head from "next/head";

import { supabase } from '../utils/supabase';

import WhatsApp from '@ericadl/components/WhatsApp';
import ModalLogin from '../components/Modal';
import NavBar from "@ericadl/components/NavBar"
import Footer from '@ericadl/components/Footer';
import CardBody from '../components/CardBody';



export default function Home() {
  const title = 'Home'

  const [modalOn, setModalOn] = useState(false)
  const [choice, setChoice] = useState(false)

  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getCategories() {
      try {
        setLoading(true)

        const { data: categories, error } = await supabase.from('categories').select('*')

        if (error) {
          setError(error)
          setData([])
        }
        setLoading(false)
        setCategories(categories)

      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getCategories()
  }, [])

  function click() {
    setModalOn(true)
  }

  function onClose() {
    setIsOpen(false)
  }


  if (error) return <p className='text-3xl text-center'>Forbidden error</p>

  // if(loading) return <p className="text-decoration-color: #f87171 text-center mt-10 text-3xl">Loading...</p>

  if (!categories) return <p className="text-decoration-color:#f87171 text-center mt-10 text-3xl">Not exists categories</p>

  return (
    <>
      <Head>
        <title>{!title ? 'Tienda Fregor | Frutos secos y Recetas saludables' : `Tienda Fregor | ${title}`}</title>
      </Head>

      
      <header className="hidden md:grid md:bg-lime-700/30 md:px-20 py-1">

        <p onClick={click} className='cursor-pointer px-5 py-3 text-xl mx-auto bg-transparent border-transparent text-gray-500 hover:bg-lime-700/50 hover:text-white focus:pointer-events-auto rounded-md' >
          Ingresa a tú cuenta
        </p>

        {modalOn && <ModalLogin setModalOn={setModalOn} setChoice={setChoice} />}

      </header>

      <NavBar categories={categories} />

      {/* <div className="border mt-[50px]">Div anterior</div> */}
      <main className='container border px-5 pt-[150px] md:pt-[250px] xl:pt-[150px] mx-auto'>
        <div className='pb-[80px] md:grid md:grid-cols-3 md:gap-4 md:gap-y-7'>
          <CardBody categories={categories} />
        </div>
      </main>

      <Footer />
      <WhatsApp />

    </>
  )
}

