import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import Rating from "./Rating";

function Game({ game, deleteGame, deleteFrom }){
  const {name, image, platform, description, rating, favorite, id} = game
  const [fav, setFav] = useState(favorite)

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
    (e.target.className === "delete"){
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
    (e.target.className === "delete material-icons"){
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
    (e.target.className === "fav"){
      fetch(`http://localhost:3000/favorite/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => deleteGame(id))
    }
    else if
    (e.target.className === "favorite material-icons"){
      fetch(`http://localhost:3000/favorite/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => deleteGame(id))
    }
    setFav(!fav)
  }


  return(
    <div className="archive-game">
      <div className="name-img">
        <img className="img"src={image} />
        <h4 className="game-name">{name}</h4>
      </div>
      <div className="favorite-btn">
        {
        fav ? 
        <p className="fav" onClick={changeFav}>Unfavorite<i className="favorite material-icons">clear</i></p> 
        : 
        <p className="delete" onClick={changeFav}>Favorite<i className="delete material-icons">favorite</i></p>
        }
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