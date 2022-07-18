import React,{ useEffect, useState } from "react";
import Game from "./Game";

function Favorite(){
  const [games, setGames] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => setGames(data))
  }, [])
  
  const filteredGames = games.filter(game => game.favorite === true)

  return(
    <div>
      <h2>A list of all the games you have favorited!</h2>
      <br/>
      {filteredGames.map(game => <Game key={game.id} game={game} />)}
    </div>
  )
}

export default Favorite