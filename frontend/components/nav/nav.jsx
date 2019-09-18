import React from 'react';
import { Link } from 'react-router-dom';
import NavSignIn from './nav_sign_in'



const Nav = ({ currentUser, logout, openModal }) => {

    const getSignIn = () => (
        <div >
            <button className='nav-sign-in' onClick={() => openModal('signin')}>SIGN IN</button>
        </div>
    );


    return (
        <div className='nav-bar' id='nav-bar'>
            <Link to='/'>
                <img className='nav-icon' src={window.images.RCWP} alt='RCWB logo' />
            </Link>
            <div className='nav-container' >
                <div className='nav-part-1'>
                    <Link class='links' to='/products'>
                        <div className='cat-link'>CLOTHING</div>
                    </Link>
                    <div className='cat-link'>ACCESSORIES</div>
                    <div className='cat-link'>DESIGNERS</div>
                    <div className='cat-link'>FALL ITEMS</div>
                    <div className='nav-link'> <img className='nav-search' src={window.images.search} /> </div>
                </div>
                <div className='nav-part-2'>
                    <div className='nav-user-menu'>
                        {currentUser ? <NavSignIn /> : getSignIn()}
                        <img className='nav-heart-icon' src={window.images.heart} />
                        {currentUser ? <img className='nav-shopping-bag' src={window.images.shopping_bag} alt='shopping bag' /> : null}
                        <a href='https://www.linkedin.com/in/erinicole1988/' target='_blank' className='a-link'>
                            <div className='nav-linkedin'>
                                <p className='nav-linkedin-bold' > LIMITED TIME ONLY </p>
                                <p > ERIN HILL LINKEDIN</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Nav