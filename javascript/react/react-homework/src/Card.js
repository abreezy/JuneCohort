import React from 'react'

function Card(props) {

  return (
    <div classname="cardComponent">
      {props.img ? <img src={props.img}></img> : <img src="https://spng.pngfind.com/pngs/s/2-24050_question-mark-png-image-transparent-white-question-mark.png" alt="not displayed"></img>}
      {props.title ? <h4>{props.title}</h4> : <h4>Unkown title</h4>}
      {props.author ? <p>{props.author}</p> : <p>Unkown author</p>}
      {props.release ? <p>{props.release}</p> : <p>Unkown release date</p>}
      {props.price ? <h3>{props.price}</h3> : <h3>Ask for quote</h3>}
    </div>
  )
}

export default Card