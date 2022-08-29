import React, { useState, useEffect } from 'react'
import CowList from './CowList'

function Cows(){
    const [cows, setCows] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cows')
        .then(res => res.json())
        .then(data => {
            setCows(data)
        })
    }, [])
    // const cowsList = cows.map( c => <CowLink key={c.id} name={c} />)
    return (
        <div>
            <ul>
            <CowList cows={cows} tittle="All Cows" />
            </ul>
        </div>
    )
}

export default Cows