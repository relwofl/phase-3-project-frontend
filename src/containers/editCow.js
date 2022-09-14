import React, { useState } from "react";
function EditCow({ id, name, onUpdateCow }) {
  const [editCow, setEditCow] = useState(name);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/cows/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editCow,
      }),
    })
      .then((r) => r.json())
      .then((updatedCow) => onUpdateCow(updatedCow));
  }
  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={editCow}
        onChange={(e) => setEditCow(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}
export default EditCow