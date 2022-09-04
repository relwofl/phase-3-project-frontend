import React, { useState } from "react";

function farmFields(){
    const [farmFields, setFarmFields] = useState([])
    
    
    useEffect(() => {
        fetch('http://localhost:9292/farm-fields')
        .then(res => res.json())
        .then(data => {
            console.log(data)

            
            
        })
    }, [])
    return (

    )
}

export default farmFields