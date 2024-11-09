import React from 'react'
import graph2percent from '../images/graph2percent.svg'
import '../styles/graphcard.css'

function Card(props) {
    return (
        <>
            <div className='company-employee-stats'>
                <div className='company-employee-stats-right'>
                    <div className='company-employee-stats-right-text-header'>
                        <p>{props.header}</p>
                    </div>
                    <div className='company-employee-stats-right-text-number'>
                        <p>{props.number}</p>
                    </div>
                    <div className='company-employee-stats-right-text-gender'>
                        <p>{props.maleGender} Men</p>
                        <p>{props.femaleGender} Women</p>

                    </div>
                </div>


                <div className='company-employee-stats-left'>
                    <div className='company-employee-stats-left-img'>
                        <img src={props.img} alt='stats' />
                    </div>
                    <div className='company-employee-stats-left-text'>
                        <p>+{props.percent}% Past month</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card