import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Main/Footer"

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    )
}

export default Layout
