import React, { useState, useEffect } from "react";
import WishGame from "./WishGame";
import WishlistForm from "./WishlistForm";

function Wishlist(){
const [games, setGames] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/wishlist")
  .then(res => res.json())
  .then(data => setGames(data))
}, [])

  return(
    <div>
      <h3>Here is where you would want to add items to your wishlist</h3>
      <WishlistForm />
      {games.map(game => <WishGame key={game.id} game={game} />)}
    </div>
  )
}

export default Wishlist