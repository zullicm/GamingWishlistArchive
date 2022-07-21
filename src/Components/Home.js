import React from "react";

function Home(){
  return(
    <div>
      <h1>Welcome to Gaming Library!</h1>
      <div id="homepage-info">
        <h3>What is this?</h3>
        <p className="home-info">Gaming library is a website to add games that you have played to keep track of what you have played. You can keep track of what you played them on, what you would rate them, and give them a fun short description or review.</p>
        <br/>
        <p className="home-info">You also have a favorites tab to keep track of all the games you decide are your favorite ones, and a wihslist where you can submit games to keep them in mind next time you're looking for a new game.</p>
        <h3>How do you use it?</h3>
        <p className="home-info">The process is very simple, click on the tab you wish to be directed too, and fill out the forms so and they'll be added to your lists.
        </p>
        <br/>

      </div>
    </div>
  )
}

export default Home