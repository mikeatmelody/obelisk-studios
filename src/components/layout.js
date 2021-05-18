import React from "react";

import Footer from "../components/Footer"
import "../styles/index.scss"

const Layout = ({ children }) => {

    return (
        <div className="layout-styles">
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout