import React, { useState } from 'react'

const Pagination = ({totalPages, handleClick}) => {
    const pages = [...Array(totalPages).keys()].map(num => num +1)
    const [currentButton, setCurrentButton] = useState(1)

    return (
        <div>
            {pages.map(num => (
                <button className={`${currentButton === num ? 'pagination-btn-active' : 'pagination-btn'}`} key={num} onClick={()=> {handleClick(num); setCurrentButton(num);}}>{num}</button>
            ))}
        </div>
    )
}

export default Pagination