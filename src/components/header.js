import React from 'react'
import { Link } from 'gatsby'
import navStyle from './nav.module.scss'

export default function Header() {
    return (
        <div>
            <nav>
                <ul className={navStyle.navLinkList}>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/all-offerts'>see all oferts</Link></li>
                    <li><Link to='/'><button>log in / log out</button></Link></li>
                </ul>
            </nav>
        </div>
    )
}
