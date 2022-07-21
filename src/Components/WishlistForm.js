import React, { useState } from "react";

function WishlistForm({ addGame }){
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [released, setReleased] = useState(true)

  function nameChange(e){
    setName(e.target.value)
  }
  
  function imgChange(e){
    setImg(e.target.value)
  }

  function releaseChange(e){
    const value = e.target.name
    if(value === "yes"){
      setReleased(true)
    }else if(value === "no"){
      setReleased(false)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    const newGame = {
      "name" : name,
      "image" : img,
      "released" : released
    }
    fetch("http://localhost:3000/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame)
    })
     .then(res => res.json())
     .then(data => addGame(data))
    setName("")
    setImg("")
    setReleased(true)
  }

  return(
    <div id="wishlist-input">
    <form onSubmit={handleSubmit} id="wishlist-form">
      <input type="text" name="name" placeholder="Name of Game..." value={name} onChange={nameChange}></input>
      <input type="text" name="image" placeholder="Image URL..." value={img} onChange={imgChange} ></input>
      <p className="black-text">Has the game release yet?</p>
      {released ? <p className="yes">Yes</p> : <p className="no">No</p>}
      <a onClick={releaseChange} name="yes" className="button btn">Yes</a>
      <a onClick={releaseChange} name="no" className="button btn">No</a>
      <br/>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Game To Wishlist
  </button>
    </form>
  </div>
  )
}

export default WishlistForm