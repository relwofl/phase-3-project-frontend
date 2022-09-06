import React, { useState } from "react";
function editCow(){
    
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const [editCow, setEditCow] = useState([])

        fetch(`http://localhost:9292/cows/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: params[:name],
          }),
        })
          .then((r) => r.json())
          .then((updatedMessage) => onUpdateMessage(updatedMessage));
      }


    return (

    )
}
export default editCow