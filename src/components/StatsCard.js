import React from 'react'
import '../styles/card.css'
function StatsCard(props) {
    return (
        <>
            <div className={`card-section ${props.color}`}>
                <div className='card-section-definition'>
                    <p>{props.definition}</p>

                </div>
                <div className='card-section-definition-number'>
                    <p>{props.number}</p>

                </div>
                <div className='card-section-definition-msg'>
                    <p>{props.msg}</p>

                </div>
            </div>
        </>
    )
}

export default StatsCard