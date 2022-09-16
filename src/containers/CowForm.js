import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


// function CowForm(){
    const CowForm = () => {
    const [ cow, setCow ] = useState({
        name: "",
        motherId: "",
        farmFieldId: ""
    })
    const history = useHistory()

    const handleChange = (e) => {
        setCow({
            ...cow,
            [e.target.name]: e.target.value
        })
    }
    // function handleSubmit (e){
        const handleSubmit = e => {
        e.preventDefault()
        
       
        const newCow = {
            name: cow.name, 
            mother_id: cow.motherId,
            farm_field_id: cow.farmFieldId
        }
       
        fetch('http://localhost:9292/cows', {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
             },
                body: JSON.stringify(newCow)  
                
        })
        .then(() => history.push("/cows"))
        
   
         
    
    }
   
    return(
        <>
        <div>Create a new Cow</div>
          <form onSubmit={handleSubmit}>
            <label>Cow</label>
            <input onChange={handleChange} type="text" name="name" value={cow.name} />
            <label>Mother</label>
            <input onChange={handleChange} type="integer" name="motherId" value={cow.motherId} />
            <label>Farm Field</label>
            <input onChange={handleChange} type="integer" name="farmFieldId" value={cow.farmFieldId} />
            
            <input type="submit" value="Add Cow" />
            </form>
        </>
    )
}


export default CowForm