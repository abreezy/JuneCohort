import React from 'react'
import './App.css'
import Nav from './Nav'
import MoviesCard from './Card'
import data from './data.json'

function App() {

  var number = 0
  const movieslist = data
  .filter((item) => item.year > 2020)
  .map((item) => {
    return (
      <MoviesCard
      key = {number++}
      thumbnail = {item.thumbnail}
      title = {item.title}
      year = {item.year}
      genres = {item.genres.join(", ")}
      extract = {item.extract}
      />
    )
  }) 


  return (
    <div>
      <header>
        <h2>Movies.io</h2>
        <Nav />
      </header>
      <main className='card-grid'>
        {movieslist}
      </main>
    </div>
  )
}

export default App