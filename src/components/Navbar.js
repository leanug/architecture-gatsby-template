import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import Links from './Links'
import styled from 'styled-components'
import { setBreakpoint, setGridGap } from '../styles/'

const Nav = styled.nav`
    display: flex;
    background: transparent;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`

const NavCenter = styled.div`
  align-items: center;
  min-height: 10rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  .logo-wrap {
    display: grid;
    justify-content: start;
    grid-auto-flow: column;
    align-items: baseline;
    grid-gap: ${ setGridGap.gridGap };
  }

  .logo-img {
    background-image: url('../assets/logo.svg');
  }

  .logo-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    line-height: normal;
  }

  img {
    margin-right: 1.5rem;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .small {
    display: none;
  }

  .nav-links {
    display: none;
    align-items: center;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    width: min-content;
  }

  .toggle-btn:hover {
  }

  @media screen and (min-width: ${ setBreakpoint.medium }) {
    & {
      display: grid;
      column-gap: 1rem;
      align-items: center;
    }

    .small {
      display: inline-block;
      font-size: 1.2rem;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      align-items: center;
      display: flex;
      text-transform: uppercase;

      .social-icons-header {
        margin-left: 4rem;
      }
    }

    .page-link {
      margin-right: 1rem;
    }

    .page-link {
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
    }

    .nav-icons {
      display: flex;
      justify-content: space-between;
    }

    .nav-icons .social-icon {
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }

    .nav-icons .social-icon:hover {
      transform: translateY(-5px);
    }
  }
`

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      <div className="container">
          <NavCenter>
            <div className="logo-wrap">
              {/* <img src={logo} alt="logo" /> */}
              <Link to="/">
                <span className="logo">OMEGA</span>
              </Link>
              <span className="small">Interior Design Studio</span>
            </div>
            <button onClick={ toggleSidebar } className="toggle-btn">
              <FaBars />
            </button>
            <div className="nav-links">
              <Links styleClass="navbar-links" />
              
            </div>
          </NavCenter>    
      </div>
      
    </Nav>
  )
}

export default Navbar
