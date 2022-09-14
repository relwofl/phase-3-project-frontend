import React, {useState} from 'react'

function CowForm(){
    const [ name, setName ] = useState("")
    const [ mother, setMother ] = useState("")

    function handleSubmit (e){
        e.preventDefualt()
        const newCow = {name, mother}
        fetch('http://localhost:9292/cows/', {
            method: "POST",
            body: JSON.stringify({
                name: name,
                mother: mother
            })
        }
    }
    })
    return(
        <div>
           <h2>Create a cow </h2>
           <input type="text" value={name} onChange={{(e) => setName(e.target.value)}}
        </div>
    )
}


export default CowForm