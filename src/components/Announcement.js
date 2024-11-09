import React from 'react'
import '../styles/announcement.css'
import { TbPinnedFilled } from "react-icons/tb";
import { MdMoreHoriz } from "react-icons/md";
import { VscPinned } from "react-icons/vsc";
function Announcement() {
    return (
        <>
            <div className='announcement-section-box'>
                <div className='announcement-section-box-header'>
                    <div className='announcement-section-box-header-text'>
                        <span className='announcement-text'><p>Announcement</p></span>
                        <span className='announcement-date'><select><option>Today, 9 Nov 2024</option></select></span>
                    </div>
                </div>

                <div className='announcement-table'>
                    <div className='announcement-table-card'>
                        <div className='announcement-table-card-right'>
                            <span className='right-header'>
                                <p>Outing schedule for every departement</p>
                            </span>
                            <span className='right-time'>
                                5 Minutes ago
                            </span>
                        </div>
                        <div className='announcement-table-card-left'>
                            <span className='pinned-announcement'><TbPinnedFilled /></span>
                            <span className='more-option'><MdMoreHoriz /></span>

                        </div>
                    </div>



                    <div className='announcement-table-card'>
                        <div className='announcement-table-card-right'>
                            <span className='right-header'>
                                <p>Meeting HR Department</p>
                            </span>
                            <span className='right-time'>
                                Yesterday, 12:30 PM
                            </span>
                        </div>
                        <div className='announcement-table-card-left'>
                            <span className='pinned-announcement'><VscPinned /></span>
                            <span className='more-option'><MdMoreHoriz /></span>

                        </div>
                    </div>


                    <div className='announcement-table-card'>
                        <div className='announcement-table-card-right'>
                            <span className='right-header'>
                                <p>IT Department need two more talents for UX/UI Designer position</p>
                            </span>
                            <span className='right-time'>
                                Yesterday, 09:15 AM
                            </span>
                        </div>
                        <div className='announcement-table-card-left'>
                            <span className='pinned-announcement'><VscPinned /></span>
                            <span className='more-option'><MdMoreHoriz /></span>

                        </div>
                    </div>
                </div>
                <div className='seeallannouncement'>
                    <span className='seallannouncement-text'>See all Announcements</span>
                </div>
            </div>
        </>
    )
}

export default Announcement