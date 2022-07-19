import React, { useState, useEffect } from "react";
import WishGame from "./WishGame";
import WishlistForm from "./WishlistForm";

function Wishlist(){
const [games, setGames] = useState([])
const [showForm, setShowForm] = useState(false)

useEffect(() => {
  fetch("http://localhost:3000/wishlist")
  .then(res => res.json())
  .then(data => setGames(data))
}, [])

function changeShow(){
  setShowForm(!showForm)
}

  return(
    <div className="wishlist">
      {showForm ? <div><button onClick={changeShow}>HIDE FORM</button><br/><br/><WishlistForm /></div> : <div><button onClick={changeShow}>ADD GAME</button> <h1>Add games with the button above!</h1></div>}
      {games.map(game => <WishGame key={game.id} game={game} />)}
    </div>
  )
}

export default Wishlist