import React, { useState, useEffect } from "react";
import ArchiveForm from "./ArchiveForm";
import Game from "./Game";

function Archive(){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => setGames(data))
  }, [])

  return(
    <div className="archive">
      <ArchiveForm />
      {games.map(game => <Game key={game.id} game={game}/>)}
    </div>
  )
}

export default Archive