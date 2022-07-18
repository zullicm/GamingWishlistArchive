import React, { useState, useEffect } from "react";
import ArchiveForm from "./ArchiveForm";
import Game from "./Game";

function Archive(){
  const [games, setGames] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => setGames(data))
  }, [])

  function addGame(newGame){
    setGames([...games, newGame])
  }

  function changeShow(){
    setShowForm(!showForm)
  }

  return(
    <div className="archive">
      {showForm ? <div><button onClick={changeShow}>HIDE FORM</button><br/><br/><ArchiveForm addGame={addGame}/></div> : <button onClick={changeShow}>ADD GAME</button>}
      {games.map(game => <Game key={game.id} game={game}/>)}
    </div>
  )
}

export default Archive