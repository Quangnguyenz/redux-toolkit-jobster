import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import React from 'react'

const NavLinks = ({ toggleSidebar }) => {
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, id, icon } = link
                return <NavLink to={path} className={({ isActive }) => {
                    return isActive ? 'nav-link active' : 'nav-link'
                }}
                    key={id}
                    onClick={toggleSidebar}
                >
                    <span className='icon'>{icon}
                        {text}
                    </span>
                </NavLink>
            })}
        </div>
    )
}

export default NavLinks