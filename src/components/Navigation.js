import React from 'react'
import { Link }from 'react-router-dom'
 

function Navigation(){
    return <div className="Navigation">
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/cows">Cows</Link>
            <Link to="/farm-fields">Farm Fields</Link>
            <Link to="/add-cow">New Cow</Link>
        </div>
    </div>
}

export default Navigation