import React, { useState } from "react"
import {IoMdMenu} from 'react-icons/io'
import {RiLogoutBoxLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import type { PropsTopBar } from '../../types'
import {Link, useNavigate} from 'react-router-dom'

//assets
import avatar from '../../assets/images/avatar.png'

export const TopBar: React.FC<PropsTopBar> = ({showNav, setShowNav}) => {

    const [showUserMenu, setSHowUserMenu] = useState<boolean>(false)

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNav ? "ms-auto" : '' }`} style={{ transition: 'all 400ms', left: showNav ? '200px' : '0', right: '0'}}>
            <div className="container-fluid">
                <button className="btn btn-light" type="button" 
                onClick={() => setShowNav(!showNav)}
                style={{fontSize: '24px', padding: '10px'}}
                >
                <IoMdMenu />
                </button>

                <div className="d-flex align-items-center ms-auto">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle d-flex align-item-center" type="button"
                        onClick={() => setSHowUserMenu(!showUserMenu)}
                        >
                            <img 
                            src={avatar}
                            loading="lazy"
                            className="rounded-circle me-2"
                            style={{width: '32px', height: '32px'}}
                            alt="profile_picture"
                            />
                            <span className="d-none d-md-inline">displayName(data)</span>
                            <BiChevronDown className="ms-2"/>

                        </button>
                        <ul className={`dropdown-menu dropdown-menu-end ${showUserMenu ? 'show' : 'none'}`}>
                             <li>
                                <Link className="dropdown-item" to="/admin/profile">
                                <AiOutlineUser className="me-2"/>
                                Profile
                                </Link>
                             </li>
                             <li>
                                <Link className="dropdown-item" to="/logout">
                                <RiLogoutBoxLine className="me-2"/>
                                Logout
                                </Link>
                             </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    ) 
}