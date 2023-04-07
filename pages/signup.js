import Head from "next/head"

export default function Signup() {
  const title = 'Registro'
  return (
    <div>
      <Head>
        <title>{!title ? 'Fregor' : `Fregor | ${title}`}</title>
      </Head>
      <h1 className="text-center text-3xl text-red-500">El registro</h1>
    </div>
  )
}
