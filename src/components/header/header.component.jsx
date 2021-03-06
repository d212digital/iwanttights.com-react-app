import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';


import { ReactComponent as Logo } from '../../assets/iwt_logo.svg';

const Header = ( {currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
        <Logo className='logo' />
        </Link>
        <div className='options'>

        <Link className='option' to='/shop'>
            BROWSE COLLECTIONS
        </Link>
        <Link className='option' to='/brandsdirectory'>
            BRANDS
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        
        {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
            </div>
        )    :  (
            <Link className='option' to='/signin'>
            SIGN IN
            </Link>
        )}
        </div>
    </div>
 
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
