import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Title = ({title}) => (<h2>{title}</h2>)

const Statistic = ({ type, value }) => (
  <div>
    <td>{type}</td>
    <td>{value}</td>
  </div>
)

const Statistics = (props) => {
  console.log(props)
  return(
    <div>
      <table>
        <tr><Statistic type={'good'} value={props.good}/></tr>
        <tr><Statistic type={'netural'} value={props.neutral}/></tr>
        <tr><Statistic type={'bad'} value={props.bad}/></tr>
        <tr><Statistic type={'all'} value={props.all}/></tr>
        <tr><Statistic type={'average'} value={(props.good - props.bad)/props.all}/></tr>
        <tr><Statistic type={'positive'} value={props.good*100/props.all + ' %'}/></tr>
      </table>
     </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const props = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all
  }

  const handleGoodClick = () => {
    console.log('good button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', (good - bad)/all)
    setGood(good + 1)
    setAll(all + 1)    
  }

  const handleNeutralClick = () => {
    console.log('neutral button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', (good - bad)/all)
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    console.log('bad button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', (good - bad)/all)
    setBad(bad + 1)
    setAll(all + 1)
  }

  console.log('after:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', (good - bad)/all)

  if (all === 0) {
    return (
      <div>
      <Title title={'give feedback'}/>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <Title title={'statistics'}/>
      <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Title title={'give feedback'}/>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <Title title={'statistics'}/>
      <Statistics good={props.good} neutral={props.neutral} bad={props.bad} all={props.all}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)