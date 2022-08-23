import React from 'react'
import './Navigation.scss';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crwn.svg';
const Navbar = () => {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar
