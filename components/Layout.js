import NavBar from "./NavBar"
import Footer from "./Footer"


export default function Layout({children, ...props}) {
  console.log("props desde el index",props)
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
}
