import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import logoTransparent from '../assets/logo-transparent.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section footer-brand">
                    <img src={logoTransparent} alt="Summit Marine Exports" className="footer-logo" />
                    <p>Premium Indian Seafood Since 1998.</p>
                    <p>Delivering quality shrimp to the world with sustainability and excellence.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Our Products</Link></li>
                        <li><Link to="/infrastructure">Infrastructure</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <FaMapMarkerAlt className="icon" />
                            <span>Rs #130, Yanamadurru Village, <br />Bhimavaram, AP - 534239, India</span>
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <span>sales@summitmarineexports.com</span>
                        </li>
                        <li>
                            <FaPhone className="icon" />
                            <span>+91 98485 23600</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Summit Marine Exports. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
