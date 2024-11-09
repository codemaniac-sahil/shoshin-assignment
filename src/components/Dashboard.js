import React from 'react'
import '../styles/dashboard.css'
import StatsCard from './StatsCard'
import Card from './Card'
import graph2percent from '../images/graph2percent.svg'
import graph5percent from '../images/graph6percent.svg'
import Announcement from './Announcement'
import Navbar from './Navbar'
import { MdMoreHoriz } from 'react-icons/md'

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='dashboard'>

                <div className='dashboard-section'>
                    <div className='dashboard-section-hero'>
                        <div className='dashboard-section-hero-text'>
                            <p>Dashboard</p>
                        </div>
                        <div className='dashboard-section-hero-stats'>
                            <div className='dashboard-section-hero-stats-container'>
                                <StatsCard definition="Available Position" number='24' msg="4 Urgently needed" color="red" />
                                <StatsCard definition="Job Open" number='10' msg="4 Actively hiring" color="blue" />
                                <StatsCard definition="New Employees" number='24' msg="4 Department" color="pink" />
                            </div>
                        </div>
                        <div className='dashboard-section-company-stats'>
                            <div className='dashboard-section-company-stats-container'>
                                <Card header="Total Employees" number="216" maleGender="120" femaleGender="96" img={graph2percent} percent="2" />
                                <Card header="Talent Request" number="16" maleGender="6" femaleGender="10" img={graph5percent} percent="5" />


                            </div>

                        </div>


                        <div className='annoncement-section'>

                            <Announcement />
                        </div>

                    </div>




                </div>
                <div className='dashboard-section-recent-activity'>
                    <div className='dashboard-section-recent-activity-box'>
                        <div className='dashboard-section-recent-activity-box-header'>
                            <p>Recent Activity </p>
                        </div>
                        <div className='dashboard-section-recent-activity-box-info'>
                            <div className='dashboard-section-recent-activity-box-info-text'>
                                <span className='time'>10.40 AM, Fri 10 Sept 2021</span>
                                <span className='header'>You Posted a New Job</span>
                                <span className='text'>Kindly check the requirements and terms of work and make sure everything is right.</span>

                            </div>
                            <div className='dashboard-section-recent-activity-box-info-button'>
                                <span className='button-text'>Today you makes 12 Activity</span>
                                <span className='button'>
                                    <button>See All Activity</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-section-upcoming-schedule-box'>

                        <div className='announcement-section-box-header'>
                            <div className='announcement-section-box-header-text'>
                                <span className='announcement-text'><p>Upcoming Schedule</p></span>
                                <span className='announcement-date'><select><option>Today, 9 Nov 2024</option></select></span>
                            </div>
                        </div>
                        <div className='dashboard-section-upcoming-schedule'>
                            <div className='priority'>
                                <span className='priority-text'><p>Priority</p></span>
                            </div>
                            <div className='announcement-table-card'>
                                <div className='announcement-table-card-right'>
                                    <span className='right-header'>
                                        <p>Review candidate applications</p>
                                    </span>
                                    <span className='right-time'>
                                        Today - 11.30 AM
                                    </span>
                                </div>
                                <div className='announcement-table-card-left'>

                                    <span className='more-option'><MdMoreHoriz /></span>

                                </div>
                            </div>

                            <div className='priority'>
                                <span className='priority-text'><p>Other</p></span>
                            </div>
                            <div className='announcement-table'>

                                <div className='announcement-table-card'>
                                    <div className='announcement-table-card-right'>
                                        <span className='right-header'>
                                            <p>Interview with candidates</p>
                                        </span>
                                        <span className='right-time'>
                                            Today - 10.30 AM
                                        </span>
                                    </div>
                                    <div className='announcement-table-card-left'>

                                        <span className='more-option'><MdMoreHoriz /></span>

                                    </div>
                                </div>
                                <div className='announcement-table-card'>
                                    <div className='announcement-table-card-right'>
                                        <span className='right-header'>
                                            <p>Short meeting with product designer from IT Departement</p>
                                        </span>
                                        <span className='right-time'>
                                            Today - 09.15 AM
                                        </span>
                                    </div>
                                    <div className='announcement-table-card-left'>

                                        <span className='more-option'><MdMoreHoriz /></span>

                                    </div>
                                </div>


                                <div className='seeallannouncement'>
                                    <span className='seallannouncement-text'>Create new Schedule</span>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard