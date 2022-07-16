import React, { useState } from "react";

function WishlistForm(){
  const [name, setName] = useState("")

  // AADDD
  // 
  // GIT COMMittt
  // 
  // 
  // 
  // 
  // 
  // 
  // pleasssssseeeeeeee


  function nameChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(name)
    console.log(e.target.image.value)
    console.log(e.target.release.value)

    setName("")
  }
  return(
    <div id="wishlist-input">
    <form onSubmit={handleSubmit} id="wishlist-form">
      <input type="text" name="name" placeholder="Name of Game..." value={name} onChange={nameChange}></input>
      <input type="text" name="image" placeholder="Image URL..."></input>
      <input type="text" name="release" placeholder="Rleased?"></input>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Game To Wishlist
  </button>
    </form>
  </div>
  )
}

export default WishlistForm