import React from "react";

function DeleteButton({ id, onGameDelete, deleteFrom }){

  function deleteGame(){
    fetch(`http://localhost:3000/${deleteFrom}/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onGameDelete(id))
  }
  
  return(
    <p onClick={deleteGame} className="delete-game" >Delete Game<i className="material-icons">delete</i></p>
  )
}

export default DeleteButton