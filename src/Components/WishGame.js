import React, { useState } from "react";
import DeleteWishlist from "./DeleteWishlist";

function WishGame({ game, onGameDelete }){
  const {name, image, released, id} = game
  const [out, setOut] = useState(released)

  return(
    <div className="wishlist-game">
      <div className="name-img">
        <img className="wishlist-img"src={image} />
        <h4 className="wishlist-name">{name}</h4>
      </div>
      <div>
        <p className="released">Released: {out ? <i class="green-text material-icons">thumb_up</i> : <i class="red-text material-icons">thumb_down</i>}</p>
      </div>
      <div>
        <DeleteWishlist onGameDelete={onGameDelete} id={id}/>
      </div>
    </div>
  )
}

export default WishGame