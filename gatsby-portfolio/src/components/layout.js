import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'

const Layout = ({pageTitle, children}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}style={{ marginRight: "auto" }}>
            <h1 className={heading}>{pageTitle}</h1>
          </li>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li className={navLinkItem}><Link to="about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout