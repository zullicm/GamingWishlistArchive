import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
  return(
    <div className="navbar-fixed">
    <nav>
      <div className="blue-grey lighten-3 nav-wrapper">
          <NavLink className="left-align brand brand-logo black-text" exact to="/">Gaming Library</NavLink>
        <ul className="right hide-on-med-and-down">
          <li><NavLink className="black-text" exact to="/wishlist">Wishlist</NavLink></li>
          <li><NavLink className="black-text" exact to="/archive">Archive</NavLink></li>
          <li><NavLink className="black-text favoriteBtn" exact to="/favorite">Favorite</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar