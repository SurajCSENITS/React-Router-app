import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
            style={{ width: 280 }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <svg className="bi pe-none me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/" className={({isActive}) => `nav-link text-white ${isActive ? "active" : ""}`} aria-current="page" >
                        <svg className="bi pe-none me-2" width={16} height={16}>
                            <use xlinkHref="#home" />
                        </svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create-post" className={({isActive}) => `nav-link text-white ${isActive ? "active" : ""}`}>
                        <svg className="bi pe-none me-2" width={16} height={16}>
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Create Post
                    </NavLink>
                </li>
            </ul>
            <hr />
        </div>

    )
}

export default Sidebar