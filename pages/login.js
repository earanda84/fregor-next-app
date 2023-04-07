import Head from "next/head"

export default function Login() {
    const title = 'Login'
    return (
    <div>
        <Head>
            <title>{!title ? '' : title}</title>
        </Head>
        <div>
            <h1 className="text-3xl text-center pt-5">Login</h1>
        </div>
    </div>
  )
}
