import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const FieldDetails = () => {
    const { id } = useParams()
        const [field, setField] = useState()
        const [loading, setLoading] = useState(true)


    useEffect(() => {
            fetch(`http://localhost:9292/farm-field/${id}`)
            .then(r => r.json())
        .then(data => {
            setField(data)
                    setLoading(false)

        })
    }, [])
    if (loading) {
        return <h1>"Loading..."</h1>
    } else {
        const fieldLsit = field.cows.map((cow))
    }
    return(
        <div className="cow-details">
            <div>
            <h2>Name: {field.name} </h2>
            <h2>{field.cows.name}</h2>
          
            {/* <h2>Cows: {field.cow.name} </h2> */}
            <p>Note: {field.note} </p>
            {/* <h3>Mother: {field.mother?.name || ""} </h3> */}
            {/* <h3>{cow.farmfield?.name || ""} </h2> */}


            </div>
        </div>
    )
}

export default FieldDetails