import React from 'react';
import './Header.css';

const Header = () => {
    const mainLogo ='https://cdn-icons-png.flaticon.com/512/3081/3081559.png';
    return (
        <div>
            <nav>
                <div className='navbar-item'>
                    <div className='site-logo'><img src={mainLogo} alt='No Images'></img></div>
                    <div className='site-menu'>
                        <ul>
                            <li><a href='/home'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/shop'>Shop</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;