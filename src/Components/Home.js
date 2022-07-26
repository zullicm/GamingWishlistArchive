import React from "react";

function Home(){
  return(
    <div>
      <h1>Welcome to Gaming Library!</h1>
      <div id="homepage-info">
        <h3>What is this?</h3>
        <p className="home-info">Gaming library is a website where you add games that you have played to keep track of them. You can keep track of what you played them on, what you would rate them, and give them a fun short description or review.</p>
        <br/>
        <p className="home-info">You also have a favorites tab to keep track of all the games you decide are your favorite ones, and a wishlist where you can submit games to keep them in mind next time you're looking for a new game to play.</p>
        <h3>How do you use it?</h3>
        <p className="home-info">The process is very simple, click on the tab you wish to be directed too, and fill out the forms and that game will be added to its repective list.
        </p>
        <br/>
        <h4 className="home-info">NOTE.</h4>

        <p className="home-info">For your favorites list you dont need to add games with forms, given that if the game is one of your favorite games, you have most likely played it and added it to your archive. So add it to your archive and then click the favorite button  and that game will be added to your favorites list.</p>
      </div>
    </div>
  )
}

export default Home