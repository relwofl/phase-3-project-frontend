import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import EditCow from "../containers/EditCow";

const CowDetails = ({ onUpdateCow }) => {
    const { id } = useParams()
        const [cow, setCow] = useState()
        const [loading, setLoading] = useState(true)
        const [isEditing, setIsEditing] = useState(false)
        const history = useHistory()


    useEffect(() => {
            fetch(`http://localhost:9292/cows/${id}`)
            .then(r => r.json())
        .then(data => {
            setCow(data)
                    setLoading(false)

        })
    }, [])
    if (loading) return <h1>"Loading..."</h1>
    const handleUpdateCow = (updatedCow) => {
            setIsEditing(false);
            onUpdateCow(updatedCow);
          }

    const handleClick= () => {
        fetch(`http://localhost:9292/cows/${id}`, { 
        method: "DELETE",
    }).then(() => {
        history.push("/cows")
        })
    }
   
    return(
        <div className="cow-details">
            <div>
            {isEditing ? (
                    <EditCow
                    id={id}
                    name={cow.name}
                    onUpdateCow={handleUpdateCow}
                    />
                ) : (
                    <h2>{cow.name}</h2>
                )} 
            {/* <h2>Name: {cow.name}</h2> */}
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>edit</button>    

            <h3>Mother: {cow.mother?.name || ""} </h3>
            {/* <h3>{cow.farm_field.name}</h3> */}
            {/* <h3>{cow.farmfield?.name || ""} </h2> */}
            <button onClick={handleClick}>delete</button>

            </div>
        </div>
    )
}

export default CowDetails;