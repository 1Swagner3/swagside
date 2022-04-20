import React from 'react'
import './skillCard.css'
const Skillcard = ({pic, text}) => {
    return (
        <>
            <div className='skillcard'>
                <div className='skillpic'>{pic}</div>
                <div className='skilltext'>{text}</div>
            </div>
        </>
    )
}

export default Skillcard