import React from 'react'
// import { TbFountainOff } from 'react-icons/tb'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Outlet } from 'react-router-dom'


export const Layout: React.FC = () => {

    return (
       <>
       
               <div className="d-flex flex-column min-vh-100 bg-light">
            {/* Header */}
<Header />
            <main className="flex-row-1 min-vh-100">
                 <Outlet />
            </main>

            {/* footer */}

            <Footer />

        </div>
       </>
    )
}