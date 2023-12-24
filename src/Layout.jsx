import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function Layout() {
    return (
        <>
            <Header />
            {/* with the help of outelet header and footer will always be avaible on every page */}
            {/* Child routes will be rendered here */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
