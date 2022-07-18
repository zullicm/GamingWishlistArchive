import React from "react";

function Rating({ rating }){

  if(rating < 2){
    return(
      <i className="yellow-text material-icons">star</i>
    )
  }else if(rating < 3){
    return(
      <i className="yellow-text material-icons">star star</i>
    )
  }else if(rating < 4){
    return(
      <i className="yellow-text material-icons">star star star</i>
    )
  }else if(rating < 5){
    return(
      <i className="yellow-text material-icons">star star star star</i>
    )
  }else if(rating < 6){
    return(
      <i className="yellow-text material-icons">star star star star star</i>
    )
  }

}

export default Rating