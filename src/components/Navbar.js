import React from 'react'
import Link from 'gatsby-link'
import '../utils/navbar'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="ECSESS" style={{ maxWidth: '88px' }} />
          </figure>
        </Link>
        <div className="navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/about">
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/council">
              Council
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/resources">
              Resources
            </Link>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <Link to="/faq">
                  FAQ
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/finance">
                  Finances
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
