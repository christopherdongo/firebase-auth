import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../../components/header/TopBar'
import { Sidebar } from '../sidebar/Sidebar'

export const AdminLayout = () => {

    const [showNav, setShowNav] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleSizeCustom = () => {
        if(window.innerWidth <=768) {
            setIsMobile(true)
            setShowNav(true)
        } else {
            setIsMobile(false)
            setShowNav(true)
        }
    }


    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize',handleSizeCustom)
        handleSizeCustom()
      }

      return () => {
        window.removeEventListener('resize', handleSizeCustom)
      }
    }, [])

    return (
        <div className='d-flex bg-light'>
            { /* topbar */}
            <TopBar showNav={showNav} setShowNav={setShowNav} />
            <Transition 
            as="div"
            show={showNav}
            enter="transition-transform duration-400"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-400"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            >

                <Sidebar showNav={showNav}/>

</Transition>
               <div className={`flex-grow-1 ${showNav && !isMobile ? "ms-240" : ""}`}
                style={{transition: 'all 0.6s', left: showNav ? '260px' : 0, right: '0'}}
                >
                    <main className='p-4 ml-5 bg-light' style={{transition: 'all 0.6s', left: showNav ? '280px' : '0', right: '0'}}>
                        <Outlet />
                    </main>
                </div>
        </div>
    )
}