import React, { useState, useEffect } from 'react'
import EditCow from './EditCow'
// import Cows from "./Cows";
import { useParams } from 'react-router-dom'

const Cow = ({ onUpdateCow }) => {
    const [cow, setCow] = useState({
mother: []
    })
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false);

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
console.log(isEditing)

function handleUpdateCow(updatedCow) {
    setIsEditing(false);
    onUpdateCow(updatedCow);
  }
  console.log(onUpdateCow)

///add in hirstory to bump you back to the cow 
console.log(onUpdateCow)
return (
        <div>
        {/* <h1>{cow.name}</h1>    */}
        {isEditing ? (
        <EditCow
          id={yeah.id}
          name={cow.name}
          onUpdateCow={handleUpdateCow}
        />
      ) : (
        <h1>{cow.name}</h1>
      )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>edit</button>    
        <h2>{cow.mother?.name || "no mother"} </h2>
            
        </div>
        
    )
}

export default Cow