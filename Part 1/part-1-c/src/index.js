//first example below

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const Display = ({ counter }) => <div><p>Current counter is {counter}</p></div>

  const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('plus button clicked and counter increased')}

  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('minus button clicked and counter decreased')}

  const setToZero = () => {
    setCounter(0)
    console.log('zero button clicked and counter restarted')}

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        handleClick={increaseByOne}
        text='plus'
      />
      <Button 
        handleClick={setToZero}
        text='zero'
      />
      <Button 
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)