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
            }),
        })
        .then((r) => r.json())
        .then((newCow) => {
        console.log(newCow)
         
        });
    }
    return(
        <div>
           <h2>Create a cow </h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Cow</label>
            <input type="text" value={mother} onChange={(e) => setMother(e.target.value)} />
            <label>Mother</label>
        </div>
    )
}


export default CowForm