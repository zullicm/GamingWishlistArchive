import React,{ useEffect, useState } from "react";
import Game from "./Game";

function Favorite(){
  const [favGames, setFavGames] = useState([])
  const [fav, setFav] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => setFavFilter(data))
  }, [])

  function setFavFilter(games){
    const filteredGames = games.filter(game => game.favorite === true)
    console.log(filteredGames)
    setFavGames(filteredGames)
  }

  function changeFav(){
    setFav(!fav)
  }

  return(
    <div>
      <h2>A list of all the games you have favorited!</h2>
      <br/>
      {favGames.map(game => <Game key={game.id}game={game} changeFav={changeFav}/>)}
    </div>
  )
}

export default Favorite