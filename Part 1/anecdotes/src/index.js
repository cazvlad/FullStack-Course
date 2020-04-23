import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  
  const handleRandomize = () => {
    let randomNumber = Math.floor((Math.random() * 5))
    setSelected(randomNumber)
    console.log('Initial anecdote:', selected)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log('Voted for anecdote:', selected)
  }

  console.log('Points Array:', points)
  console.log('Current anecdote:', selected)

  let max = points[0]
  let maxIndex = 0

  for (var i = 1; i < points.length; i++) {
    if (points[i] > max) {
      maxIndex = i;
      max = points[i];
    }
  }

  console.log('Anecdote', maxIndex, 'has the most votes:', max, 'votes')

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Anecdote has {points[selected]} votes</p>
      <Button handleClick={handleVote} text={'Vote'}/>
      <Button handleClick={handleRandomize} text={'Next Anecdote'}/>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[maxIndex]}</p>
      <p>Anecdote has {max} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)