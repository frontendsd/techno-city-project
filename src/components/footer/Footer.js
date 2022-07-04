import React from 'react'
import {Link} from 'react-router-dom'
import Logo from'../../assets/logo.svg'
import './Footer.css'
import '../../App.css'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
       <div className="footer-body">
            <div className="footer-about">
                <Link to='/'>
                    <img src={Logo} alt=""  className='footer-site-logo'/>
                </Link>

                <Link to='/' className="footer-about-content">
                    <h5 className='footer-about-content_title'>
                        Biz haqimizda
                    </h5>
                    <p className='footer-about-content-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas architecto tempora, nisi voluptatibus corrupti repudiandae fugiat accusamus
                    </p>
                    <h4>Techno City 2022</h4>
                </Link>
            </div>
            <div className="footer-main">
               <h5 className='footer-title'>Menu</h5>
               <ul className="footer-list">
                 <Link className='footer-list-item' to='/'>Bosh sahifa</Link>
                 <Link className='footer-list-item' to="/">Mahsulotlarimiz</Link>
                 <Link className='footer-list-item' to='/'>Kredit</Link>
                 <Link className='footer-list-item' to='/'>Saqlanganlar</Link>
                 <Link className='footer-list-item' to='/'>Biz haqimizda</Link>
               </ul>
            </div>
            <div className="footer-main">
               <h5 className='footer-title'>Kontaktlar</h5>
               <ul className="footer-list">
                 <Link className='footer-list-item' to='/'>Tel:90 000 00 00</Link>
                 <Link className='footer-list-item' to="/">Technocity@gmail.com</Link>
                 <Link className='footer-list-item' to='/'>Farg'ona sh. A. Qodiriy 148</Link>
                 
               </ul>
            </div>
            <div className="footer-map">
               <h4 className="footer-title">
                  Xarita
               </h4>
                  <div className="map">
                  <div style={{position:"relative", height:"300px",width:"400px"}} class="mapouter"><div style={{overflow:"hidden", background:"none!important", height:"300px", width:"400px"}} class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Fergana%20Tadbirkorlar%20146&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a><a href="https://www.embedgooglemap.net"></a></div></div>
                  </div>
            </div>  
        </div>
       </div>
    </footer>
  )
}

export default Footer