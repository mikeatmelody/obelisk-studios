import React from "react";

import Footer from "../components/Footer"

const Layout = ({ children }) => {

    return (
        <div className="layout-styles">
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout