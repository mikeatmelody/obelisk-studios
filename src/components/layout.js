import React from "react";
import "../styles/index.scss"
import Header from '../components/Header'
import Footer from "../components/Footer"


const Layout = ({ children }) => {

    return (
        
        <div className="layout-styles">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout