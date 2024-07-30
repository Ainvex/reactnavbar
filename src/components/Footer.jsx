import React from 'react'
import '../Styles/main.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    
      <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="#" class="footer__logo">REACT DEVELOPER</a>
                    <span className="footer__description">LEARNReact</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li><Link to="/" className="navbar-item">Home</Link></li>
                        <li><Link to="/Latest" className="navbar-item">Latest</Link></li>
                        <li><Link to="/SignUp" className="navbar-item">Sign UP</Link></li>
                        <li><Link to="/Login" className="navbar-item">Login</Link></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><Link to="/" className="navbar-item">Home</Link></li>
                        <li><Link to="/Latest" className="navbar-item">Latest</Link></li>
                        <li><Link to="/SignUp" className="navbar-item">Sign UP</Link></li>
                        <li><Link to="/Login" className="navbar-item">Login</Link></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Adress</h3>
                    <ul>
                        <li>TURF - Peru</li>
                        <li>79 HOLY STR</li>
                        <li>999 - 888 - 777</li>
                        <li>Reactdeveloper@email.com</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">&#169; 2024 Joshua Momo. All right reserved</p>
        </footer>
   
    </>
  )
}

export default Footer
