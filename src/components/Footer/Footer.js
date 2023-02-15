import React from 'react';
import './Footer.css';
import myImage from '../../images/ssl-mobile.png';

const Footer = () => {
    const FooterLogo ='https://cdn-icons-png.flaticon.com/512/3081/3081559.png';
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={FooterLogo} alt='no images'></img>
            </div>
            <div className='copy-right'>
                <small>&copy; 2023 <a href='#' style={{color:'orange'}}>Ema-John</a> Ecommerce</small>
            </div>
            <div className='bank'>
                <img src={myImage} alt='no images'></img>
            </div>
        </div>
    );
};

export default Footer;