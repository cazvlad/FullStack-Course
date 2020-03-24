import React from 'react';
import ReactDOM from 'react-dom';

const coursename = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = (course) => {
  return (
    <div>
      <h1>
        {course.name}
      </h1>
    </div>
  )
}

const Part = (prop) => {
  return (
    <div>
      <p>
      {prop.part} {prop.exercises}
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Total = () => {
  return (
    <div>
      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header name={coursename}/>
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
