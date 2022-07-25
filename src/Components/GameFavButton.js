import React from "react";

function GameFavButton({ fav, changeFav }){
  
  return(
    <div>
    {
      fav ? 
      <p className="yellow-text">Favorited!</p>
      : 
      <p className="fav" onClick={changeFav}>Favorite<i className="favorite material-icons">favorite</i></p> 
      }
    </div>
  )
}

export default GameFavButton