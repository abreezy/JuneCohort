import React from 'react'

function MoviesCard(props) {
    return (
        <div classname="cardComponent">
          {props.thumbnail ? <img src={props.thumbnail} alt={props.alt}></img> : <img src="https://spng.pngfind.com/pngs/s/2-24050_question-mark-png-image-transparent-white-question-mark.png" alt="not displayed"></img>}
          {props.title ? <h4>{props.title}</h4> : <h4>Not specified</h4>}
          {props.genres ? <p>{props.genres}</p> : <p>Not listed</p>}
          {props.extract ? <p>{props.extract}</p> : <p>Details to be released soon</p>}
        </div>
      )
    }

export default MoviesCard