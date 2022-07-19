import React from "react";

function DeleteWishlist({ id, onGameDelete }){

  function deleteGame(){
    fetch(`http://localhost:3000/wishlist/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onGameDelete(id))
  }
  
  return(
    <p onClick={deleteGame} className="delete-game" >Delete Game<i class="material-icons">delete</i></p>
  )
}

export default DeleteWishlist