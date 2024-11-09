import React from 'react'
import '../styles/navbar.css'
import { FaBell } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import profile from '../images/profile.jpeg'


function Navbar() {
    return (
        <>
            <div className='navbar-section'>
                <div className='navbar'>
                    <div className='navbar-section-search-bar'>
                        <input type='text' size={20} placeholder='Search' />
                    </div>

                    <div className='navbar-section-right-section'>
                        <FaBell />
                        <BiSolidMessageSquareDetail />
                        <div className='navbar-section-right-section-profile-section'>
                            <div className='profile-section-image'>
                                <img src={profile} alt='profile-pic' />
                            </div>
                            <div className='profile-section-text'>
                                <p>Admirra John</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='horizontal-line'>

                <hr />
            </div>

        </>
    )
}

export default Navbar