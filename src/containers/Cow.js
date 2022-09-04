import React, { useState, useEffect } from 'react'
// import Cows from "./Cows";
import { useParams } from 'react-router-dom'

const Cow = () => {
    const [cow, setCow] = useState({
mother: []
    })
    const [loading, setLoading] = useState(true)
const yeah = useParams()
 
/// use for patch request
 useEffect(() => {
    fetch(`http://localhost:9292/cows/${yeah.id}`)
    .then(r => r.json())
    .then(data => {
        // console.log(data)
        setCow(data)
        setLoading(false)
    })
 }, [])
if (loading) return <h1>"Loading..."</h1>
return (
        <div>
            
        <h1>{cow.name}</h1>
        <h1>{cow.mother?.name || "no mother"} </h1>
            
            <h4>
            </h4> 
    
           

        </div>
        
    )
}

export default Cow