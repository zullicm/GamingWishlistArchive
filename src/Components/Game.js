import React, { useState } from "react";
import Rating from "./Rating";

function Game({ game }){
  const {name, image, platform, description, rating, favorite} = game
  const [fav, setFav] = useState(favorite)


  return(
    <div className="archive-game">
      <div className="name-img">
        <img src={image} />
        <h4 className="game-name">{name}</h4>
      </div>
      <div className="info left-align">
        <p>Rating:</p><Rating rating={rating} />
        <p>Platform: {platform}</p>
        <p>Given Description: {description}</p>
      </div>
      <div className="favorite-btn">
        <i class="material-icons">favorite</i>
      </div>
    </div>
  )
}

export default Game