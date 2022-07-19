import React,{ useEffect, useState } from "react";
import Game from "./Game";

function Favorite(){
  const [games, setGames] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/favorite")
    .then(res => res.json())
    .then(data => setFilterGames(data))
  }, [])

  function setFilterGames(favGames){
    setGames(favGames)
  }

  

  return(
    <div>
      <h2>A list of all the games you have favorited!</h2>
      <br/>
      {games.map(game => <Game key={game.id} game={game} />)}
    </div>
  )
}

export default Favorite