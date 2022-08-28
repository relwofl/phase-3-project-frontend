
import { useEffect, useState } from 'react'
function Cows(){
    const [cows, setCows ] = useState([])

    useEffect(() => {
        fetch ('http://localhost:9292/cows')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            <h1>ANy Cows here?</h1>
        </div>
    )
}

export default Cows