import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


function CowForm(){
    const [ cow, setCow ] = useState({
        name: "",
        motherId: "",
        farmFieldId: ""
    })
        const history = useHistory()

    // const [ mother, setMother ] = useState("")

    const handleChange = (e) => {
        setCow({
            ...cow,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit (e){
        e.preventDefualt()
        const newCow = {
            name: cow.name, 
            motherId: cow.motherId,
            farmFieldId: cow.farmFieldId
        
        }
        fetch("http://localhost:9292/cows/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCow)
        //         name: name,
        //         mother: mother
        //     }),
        // })
        // .then((r) => r.json())
        // .then((newCow) => {
        // console.log(newCow)
         
        });
        history.push("/http://localhost:3000/cows")
    }
    return(
        <>
        <div>Create a new Cow</div>
          <form onSubmit={handleSubmit}>
            <label>Cow</label>
            <input type="text" name="name" onChange={handleChange} value={cow.name} />
            <label>Mother</label>
            <input type="integer" name="motherId" onChange={handleChange} value={cow.motherId} />
            <label>Farm Field</label>
            <input type="integer" name="farmFieldId" onChange={handleChange} value={cow.farmFieldId} />
            
            <input type="submit" value="Add Cow" />
            </form>
        </>
    )
}


export default CowForm