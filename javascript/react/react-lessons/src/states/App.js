import React, {useState} from 'react'
import './App.css'

function App() {
    // var [count, setCount] = useState(24)
    // useState = [var, function]

    /* [var, function] = useState("Abeer")
    var = "Abeer"
    function() {
        var
    }
*/

   /* var [number, setNumber] = useState(0)
    
    function handleMinus() {
        console.log(number)
        setNumber(number = number - 1)
        console.log(number)
    }

    function handlePlus() {
        console.log(number)
        setNumber(number = number + 1)
        console.log(number)
    }

  return (
    <div>
        <button onClick={handleMinus}>-</button>
        <span>{number}</span>
        <button onClick={handlePlus}>+</button>
    </div>
  )
}
*/

const [state, setState] = useState({
    total: 0,
    totalItems: 0
})

var price = 350

function handleChange() {
    setState(...prevState => {
        return {...prevState, total: prevState.total + total, totalItems: state.totalItems++}
    })

return (
    <div>
        <header>
            <h3>Houses.io</h3>
            <nav>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Contact</a></li>
                    <li><a href=''>Log In</a></li>
                    <li>Total: {state.total}</li>
                    <li>Basket: {state.totalItems}</li>
                </ul>
            </nav>
        </header>
    </div>
)
}
}
export default App