import React from "react";

function Game({ game }){
  const {name, image, platform, description, rating} = game

  return(
    <div className="archive-game">
      <div className="name-img">
        <img src={image} />
        <h4 className="game-name">{name}</h4>
      </div>
      <div className="info">
        <p>Platform: {platform}</p>
        
        <p>Given Description: {description}</p>
      </div>
    </div>
  )
}

export default Game