import React, { useState, useEffect } from "react";
import FieldLink from "../containers/FieldLink";

function FarmFields(){
    const [farmFields, setFarmFields] = useState([])
    
    
    useEffect(() => {
        fetch('http://localhost:9292/farm-fields')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFarmFields(data)

        })
    }, [])
const fieldList = farmFields.map( f => <FieldLink key={f.id} farmField={f} />)
    
    return (
        <div>
            {fieldList}
        </div>
    )
}

export default FarmFields