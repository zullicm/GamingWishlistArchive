import React from "react";
import DeleteButton from "./DeleteButton";

function WishGame({ game, onGameDelete, deleteFrom }){
  const {name, image, released, id} = game

  return(
    <div className="wishlist-game">
      <div className="name-img">
        <img className="wishlist-img"src={image} />
        <h4 className="wishlist-name">{name}</h4>
      </div>
      <div>
        <p className="released">Released: {released ? <i class="green-text material-icons">thumb_up</i> : <i class="red-text material-icons">thumb_down</i>}</p>
      </div>
      <div>
        <DeleteButton onGameDelete={onGameDelete} id={id} deleteFrom={deleteFrom}/>
      </div>
    </div>
  )
}

export default WishGame