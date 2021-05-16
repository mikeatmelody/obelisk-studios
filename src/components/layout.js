import React from "react";


const Layout = ({ children }) => {

    return (
        <div className="layout-styles">
            <main>{children}</main>
        </div>
    )
}
export default Layout