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

  function deleteGame(id){
    const deletedGameList = games.filter(game => game.id !== id)
    setGames(deletedGameList)
  }


  return(
    <div className="archive">
      {showForm ? <div><button onClick={changeShow}>HIDE FORM</button><br/><br/><ArchiveForm addGame={addGame} /></div> : <div><button onClick={changeShow}>ADD GAME</button> <h1>Add games with the button above!</h1></div>}
      {games.map(game => <Game key={game.id} game={game} deleteGame={deleteGame} deleteFrom="games"/>)}
    </div>
  )
}

export default Archive