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
  <tr>
    <td>{type}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  console.log(props)
  return(
    <div>
      <table>
        <tbody>
          <Statistic type={'good'} value={props.good}/>
          <Statistic type={'netural'} value={props.neutral}/>
          <Statistic type={'bad'} value={props.bad}/>
          <Statistic type={'all'} value={props.all}/>
          <Statistic type={'average'} value={props.average}/>
          <Statistic type={'positive'} value={props.positive + ' %'}/>
        </tbody>
      </table>
     </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  let average = (good - bad)/all
  let positive = (good*100/all)

  const handleGoodClick = () => {
    console.log('good button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', average, 'positive =', positive)
    setGood(good + 1)
    setAll(all + 1)    
  }

  const handleNeutralClick = () => {
    console.log('neutral button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', average, 'positive =', positive)
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    console.log('bad button pressed')
    console.log('prior:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', average, 'positive =', positive)
    setBad(bad + 1)
    setAll(all + 1)
  }

  console.log('after:', 'good =', good, 'netural =', neutral, 'bad =', bad, 'all =', all, 'average =', average, 'positive =', positive)

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)