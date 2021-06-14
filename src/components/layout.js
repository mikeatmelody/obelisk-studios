import React from "react";
import "../styles/index.scss"
import Header from '../components/Header'
import Footer from "../components/Footer"
import { AnimateSharedLayout } from 'framer-motion'


const Layout = ({ children }) => {

    return (
        <AnimateSharedLayout>
        <div className="layout-styles">
            <Header />
            <main className="content-wrap">{children}</main>
            <Footer />
        </div>
        </AnimateSharedLayout>
    )
}
export default Layout