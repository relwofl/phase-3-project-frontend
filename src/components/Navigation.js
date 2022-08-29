import React from 'react'
import { Link }from 'react-router-dom'
 

function Navigation(){
    return <div className="Navigation">
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/Cows">Cows</Link>
        </div>
    </div>
}

export default Navigation