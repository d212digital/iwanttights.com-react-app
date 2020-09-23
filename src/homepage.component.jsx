import React from 'react';
import './homepage.styles.scss';



const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>TIGHTS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>STOCKINGS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HOLD UPS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>RETRO KNICKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SUSPENDER BELTS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div> 
            
        </div>
    </div>
)

export default HomePage;