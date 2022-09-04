import React, { useState, useEffect } from 'react'
// import CowList from './CowList'
import CowLink from '../components/CowLink'

function Cows(){
    const [cows, setCows] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cows')
        .then(res => res.json())
        .then(data => {
            console.log(data)

            setCows(data)
            
        })
    }, [])
    const cowsList = cows.map( c => <CowLink key={c.id} cow={c} />)
    return (
        <div>
            <ul>
            {/* <CowList cows={cows} tittle="All Cows" /> */}
            {cowsList}
            </ul>
        
        </div>
    )
}

export default Cows