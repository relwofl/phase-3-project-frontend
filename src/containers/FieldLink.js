import React from "react";
import { Link } from 'react-router-dom'
// import Cows from "./Cows";

const FieldLink = ({ farmField }) => {
    
    return (
        <div>
            <Link to={`/farm-fields/${farmField.id}`}>
            <h2>{farmField.name}</h2> 
            </Link>
            
        </div>
    )
}

export default FieldLink