import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import saves from '../../assets/saves.svg'
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
              <Link to='/BizningMaxsulotlar' className='navbar__item-child'>Bizning maxsulotlar</Link>
              <Link to='/Kredit' className='navbar__item-child'>Kredit orqali</Link>
              <Link to='/BizHaqimizda' className='navbar__item-child'>Biz haqimizda</Link>
          </div>

          {/* search */}
          <form action="" className='form__control-nav'>
              <input type="text" placeholder="Qidiruv..." className='input'/>
              <img src={search} alt="" />
              </form>
              
              {/* saves */}
              <div className="saves">
                  <Link to='/Save'>
                    <img src={saves} alt="" />
                  </Link>
              </div>

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