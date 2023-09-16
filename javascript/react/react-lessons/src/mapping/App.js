import React from 'react'
import '../components/App.css'
import Nav from '../components/Nav'
import MoviesCard from './MoviesCard'
import data from './data.json'

function App() {

  var number = 0
  const movieslist = data.map((item) => {
    return (
      <MoviesCard
      key = {number++}
      img = {item.thumbnail}
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
      <main>
        {movieslist}
      </main>
    </div>
  )
}

export default App