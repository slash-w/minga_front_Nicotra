import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Main({children}) {
  return (
    <div className="overflow-x-hidden p-t m-auto my-0 flex relative flex-col min-h-screen w-full justify-between items-center bg-white">
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
