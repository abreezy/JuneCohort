import React from 'react'

// ternary conditional statement
/*

  if(condition){
    do something
  } else {
    do this instead
  }
  
  condition ? true : false
  props.price ? <h3>{props.price}</h3> : <h3>Ask for quote</h3>

*/

function Card(props) {

  return (
    <div classname="cardComponent">
      {props.img ? <img src={props.img}></img> : <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="not displayed"></img>}
      {props.title ? <h4>{props.title}</h4> : <h4>Soon</h4>}
      {props.description ? <p>{props.description}</p> : <p>Details to be released soon</p>}
      {props.price ? <h3>{props.price}</h3> : <h3>Ask for quote</h3>}
    </div>
  )
}

export default Card