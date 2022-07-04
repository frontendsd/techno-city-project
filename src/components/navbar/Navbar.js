import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div className="container">
          <nav className='navbar'>
          {/* logo */}
          <Link className='navbar__logo' to="/">
              <img src={logo} alt={logo} />
          </Link>

          {/* item */}
          <div className="navbar__item">
              <Link to='/' className='navbar__item-child'>Bosh sahifa</Link>
              <Link to='/' className='navbar__item-child'>Bizning maxsulotlar</Link>
              <Link to='/Kredit' className='navbar__item-child'>Kredit orqali</Link>
          </div>

          {/* search */}
          <form action="" className='form__control-nav'>
              <input type="text" placeholder="Qidiruv..." className='input'/>
              <img src={search} alt="" />
          </form>

          {/* language */}
          <div className="language">
              <Link to="/" className='language__uz'>UZ</Link>
              <Link to="/" className='language__ru'>RU</Link>
          </div>
      </nav>
      </div>
  )
}

export default Navbar