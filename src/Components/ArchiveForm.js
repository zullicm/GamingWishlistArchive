import React, { useState } from "react";

function ArchiveForm({ addGame }){
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [platform, setPlatform] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(5)
  const [stars, setStars] = useState(true)

  function nameChange(e){
    setName(e.target.value)
  }
  
  function imgChange(e){
    setImg(e.target.value)
  }

  function platformChange(e){
    setPlatform(e.target.value)
  }

  function descriptionChange(e){
    setDescription(e.target.value)
  }

  function changeNum(e){
    setRating(e.target.name)
    if(e.target.name < 2){
      setStars(false)
    }else{setStars(true)}
  } 

  function handleSubmit(e){
    e.preventDefault()
    const newGame = {
      "name" : name,
      "image" : img,
      "platform" : platform,
      "description" : description,
      "rating" : rating,
      "favorite" : false
    }
    fetch("http://localhost:3000/games", {
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
    setPlatform("")
    setDescription("")
    setRating(5)
  }

  return(
    <div id="wishlist-input">
    <form onSubmit={handleSubmit} id="wishlist-form">
      <input type="text" name="name" placeholder="Name of Game..." value={name} onChange={nameChange}></input>
      <input type="text" name="image" placeholder="Image URL..." value={img} onChange={imgChange} ></input>
      <input type="text" name="platform" placeholder="Platform Played On..." value={platform} onChange={platformChange}></input>
      <input type="text" name="description" placeholder="Add a short description..." value={description} onChange={descriptionChange}></input>
      <p>Rate This Game!</p>
      <a onClick={changeNum} name={1}className="num-btn waves-effect btn-small">1</a>
      <a onClick={changeNum} name={2}className="num-btn waves-effect btn-small">2</a>
      <a onClick={changeNum} name={3}className="num-btn waves-effect btn-small">3</a>
      <a onClick={changeNum} name={4}className="num-btn waves-effect btn-small">4</a>
      <a onClick={changeNum} name={5}className="num-btn waves-effect btn-small">5</a>
      <p>Game Rating: {rating} Star{stars ? "s!" : "... yikes!"}</p>
      <br/>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Game To Wishlist
  </button>
    </form>
  </div>
  )
}

export default ArchiveForm