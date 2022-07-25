import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import FavoriteButton from "./FavoriteButton";
import GameFavButton from "./GameFavButton";
import Rating from "./Rating";

function Game({ game, deleteGame, deleteFrom, favDelete }){
  const {name, image, platform, description, rating, favorite, id} = game
  const [fav, setFav] = useState(favorite)
  const [favHelper, setFavHelper] = useState(false)

  useEffect(() => {
    if(favDelete){
      setFavHelper(true)
    }else{setFavHelper(false)}
  }, [fav])

  function changeFav(e){
    const indexObj = {
      "favorite": !fav
    }
    const postObj = {
      "name": name,
      "image": image,
      "platform": platform,
      "description": description,
      "rating": rating,
      "favorite": true
    }
    fetch(`http://localhost:3000/games/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(indexObj)
    })
    .then(res => res.json())

    if
    (e.target.className === "fav"){
      fetch("http://localhost:3000/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postObj)
      })
       .then(res => res.json())
       .then(data => console.log(data))
    }
    else if
    (e.target.className === "favorite material-icons"){
      fetch("http://localhost:3000/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postObj)
      })
       .then(res => res.json())
       .then(data => console.log(data))
    }
    else if
    (e.target.className === "delete"){
      fetch(`http://localhost:3000/favorite/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => favDelete(id))
    }
    else if
    (e.target.className === "delete material-icons"){
      fetch(`http://localhost:3000/favorite/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => favDelete(id))
    }
    setFav(!fav)
  }


  return(
    <div className={favorite ? "archive-game-fav" : "archive-game"}>
      <div className="name-img">
        <img className="img"src={image} />
        <h4 className="game-name">{name}</h4>
      </div>
      <div className="favorite-btn">
        {favHelper ? <FavoriteButton changeFav={changeFav} fav={fav}/> : <GameFavButton changeFav={changeFav} fav={fav}/>}
      </div>
      <div className="info left-align">
        <p><b>Rating:</b></p><Rating rating={rating} />
        <p><b>Platform:</b> {platform}</p>
        <p><b>Given Description:</b> {description}</p>
        <DeleteButton onGameDelete={deleteGame} id={id} deleteFrom={deleteFrom}/>
      </div>
    </div>
  )
}

export default Game