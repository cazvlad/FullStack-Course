import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = '21'
  console.log ('Names and ages printed')

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={31}/>
      <Hello name="Bob" age={32}/>
      <Hello name="Vlad" age={age}/>
      <Hello name="Gio" age={21}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))