import React, { useEffect, useState } from 'react'
/*
import './App.css'
import Nav from './Nav'
import MoviesCard from './Card'
import data from './data.json'
*/
/*
function App() {

  var number = 0
  const movieslist = data
  .filter((item) => item.year > 2022)
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
*/

/* Homework Lesson 21 - Using useState hooks replicate this counter with both buttons working */
/*
function App() {
  const [age, setAge] = useState(21)
  // anything inside the useState bracket i.e. ("here") is going to be placed in the intitial var set => const [age, setAge] = useState(21) means age - 21
  const [numberSiblings, setNumberSiblings] = useState(3)
  const [name, setName] = useState("Abeer")

  function handleOlder(){
    // setAge updates the variable age
    setAge(prevAge => prevAge + 1)
    setAge(prevAge => prevAge + 1)
  }

  function addMoreSiblings(){
    console.log("+1 sibling")
  }

  function handleNameChange(e){
    if (e.key === "Enter"){
      setName(e.target.value)
    }
  }

  return (
    <div>
      <input
        placeholder = "Enter Name"
        onKeyDown={handleNameChange}
      />
      <h1>My Name is {name}</h1>
      <h1>Today I am {age} years old</h1>
      <h1>I have {numberSiblings} Siblings</h1>
      <button onClick={handleOlder}>Get Older!</button>
      <button onClick={addMoreSiblings}>Add more Siblings!</button>
    </div>
  )
}

export default App
*/

function App() {

  const [type, setType] = useState("")
  const [items, setItems] = useState([])

  function handleUsers(){
    setType("Users")
  }
  /* 
  const handleUsers = () =>{

  }
*/

useEffect(() =>{
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setItems(json))
  console.log(items)
}, [type])

  return (
    <div>
      <button onClick={handleUsers}>Users</button>
      <button onClick={() => {setType("Posts")}}>Posts</button>
      <button onClick={() => {setType("Comments")}}>Comments</button>

      <h1>{type}</h1>
      {
          items.map(content => {
            return(
              <p>{JSON.stringify(content)}</p>
            )
          })
      }
    </div>
  )
}

export default App