import React from 'react'
import image from '../images/Frame 88.svg'
import { MdDashboard } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosSettings } from "react-icons/io";

import '../styles/sidebar.css'


function Sidebar() {
    return (
        <>
            <div className='sidebar-section'>
                <div className='sidebar-section-logo'>
                    <img src={image} alt='logo' />
                </div>
                <div className='sidebar-section-main-menu'>
                    <div className='sidebar-section-main-menu-content'>
                        <div className='sidebar-section-main-menu-text'>
                            <p style={{
                                color: '#686868',
                                fontSize: "12px"
                            }}> MAIN MENU</p>
                        </div>
                        <div className='sidebar-section-main-menu-content-text-logo'>
                            <div className='sidebar-section-main-menu-dashboard-content selected'>
                                <span className='sidebar-section-main-menu-dashboard-logo'>
                                    <MdDashboard />
                                </span>
                                <span className='sidebar-section-main-menu-dashboard-text'>
                                    <p>Dashboard</p>
                                </span>
                            </div>



                            <div className='sidebar-section-main-menu-dashboard-content'>

                                <span className='sidebar-section-main-menu-dashboard-logo'>
                                    <MdPersonAddAlt1 />
                                </span>
                                <span className='sidebar-section-main-menu-dashboard-text'>
                                    <p>Recruitment</p>
                                </span>
                            </div>


                            <div className='sidebar-section-main-menu-dashboard-content'>

                                <span className='sidebar-section-main-menu-dashboard-logo'>
                                    <FaCalendarDay />


                                </span>
                                <span className='sidebar-section-main-menu-dashboard-text'>
                                    <p>Schedule</p>
                                </span>
                            </div>



                            <div className='sidebar-section-main-menu-dashboard-content'>

                                <span className='sidebar-section-main-menu-dashboard-logo'>
                                    <IoIosPeople />
                                </span>
                                <span className='sidebar-section-main-menu-dashboard-text'>
                                    <p>Employee</p>
                                </span>
                            </div>



                            <div className='sidebar-section-main-menu-dashboard-content'>

                                <span className='sidebar-section-main-menu-dashboard-logo'>
                                    <HiOfficeBuilding />
                                </span>
                                <span className='sidebar-section-main-menu-dashboard-text'>
                                    <p>Department</p>
                                </span>
                            </div>




                        </div>

                    </div>



                    <div className='sidebar-section-main-menu-text'>
                        <p style={{
                            color: '#686868',
                            fontSize: "12px"
                        }}> OTHER</p>
                    </div>
                    <div className='sidebar-section-main-menu-dashboard-content'>

                        <span className='sidebar-section-main-menu-dashboard-logo'>
                            <TfiHeadphoneAlt />
                        </span>
                        <span className='sidebar-section-main-menu-dashboard-text'>
                            <p>Support</p>
                        </span>
                    </div>


                    <div className='sidebar-section-main-menu-dashboard-content'>

                        <span className='sidebar-section-main-menu-dashboard-logo'>
                            <IoIosSettings />
                        </span>
                        <span className='sidebar-section-main-menu-dashboard-text'>
                            <p>Settings</p>
                        </span>
                    </div>


                    {/* here */}
                </div>
            </div >
        </>
    )
}

export default Sidebar