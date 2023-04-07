import Head from "next/head"

export default function Profile() {
  const title = 'Usuario registrado'
  return (
    <div>
       <Head>
      <title>{!title ? 'Fregor' : `Fregor | ${title}`}</title>
        </Head>
      <h1 className='text-center text-3xl text-red-600'>EL Profile usuario registrado</h1>
    </div>
  )
}
