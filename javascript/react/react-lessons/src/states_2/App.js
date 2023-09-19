import React, {useState} from 'react'
import './App.css'

function App() {

    const [name, setName] = useState("")

    function handleChange(e) {

    }

  return (
    <div>
        <input
        autoComplete='off'
        value={name}
        onChange={handleChange}
        />
        <h1>Hello</h1>
        {name} ? <p>Welcome, {name}</p> : <p></p>
    </div>
  )
}

export default App