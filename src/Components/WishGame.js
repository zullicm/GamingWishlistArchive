import React from "react";

function WishGame({ game }){
  const {name, image, released, id} = game

  return(
    <div>
      <p>{name}</p>
    </div>
  )
}

export default WishGame