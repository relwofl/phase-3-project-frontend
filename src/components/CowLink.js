import React from "react";
import { Link } from 'react-router-dom'
// import Cows from "./Cows";

const CowLink = ({cow}) => {
    
    return (
        <div>
            <Link to={`/cows/${cow.id}`}>
            <h2>{cow.name}</h2> 
            </Link>
            
        </div>
    )
}

export default CowLink