import React, { useState } from "react";
import Rating from "./Rating";

function Game({ game }){
  const {name, image, platform, description, rating, favorite, id} = game
  const [fav, setFav] = useState(favorite)

  function changeFav(e){
    const indexObj = {
      "favorite": !fav
    }
    fetch(`http://localhost:3000/games/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(indexObj)
    })
    .then(res => res.json())

    console.log(e.target)

    setFav(!fav)
  }



  return(
    <div className="archive-game">
      <div className="name-img">
        <img src={image} />
        <h4 className="game-name">{name}</h4>
      </div>
      <div className="favorite-btn">
        {
        fav ? 
        <p value="delete" onClick={changeFav}>Unfavorite<i className="material-icons">delete</i></p> 
        : 
        <p value="favorite" onClick={changeFav}>Favorite<i className="material-icons">favorite</i></p>
        }
      </div>
      <div className="info left-align">
        <p><b>Rating:</b></p><Rating rating={rating} />
        <p><b>Platform:</b> {platform}</p>
        <p><b>Given Description:</b> {description}</p>
      </div>
    </div>
  )
}

export default Game