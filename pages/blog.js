import Head from "next/head"

export default function Blog() {
    const title = 'Blog'
    return (
    <div>
        <Head>
        <title>{!title ? 'Fregor' : `Fregor | ${title}`}</title>
      </Head>
      <h1 className="text-center text-3xl text-green-300">El Blog</h1>
    </div>
  )
}
