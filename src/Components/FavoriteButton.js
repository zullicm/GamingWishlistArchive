import React from "react";

function FavoriteButton({ fav, changeFav }){
  
  return(
    <div>
    {
      fav ? 
      <p className="delete" onClick={changeFav}>Unfavorite<i className="delete material-icons">clear</i></p>
      : 
      <p className="fav" onClick={changeFav}>Favorite<i className="favorite material-icons">favorite</i></p> 
      }
    </div>
  )
}

export default FavoriteButton