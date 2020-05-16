import React from 'react'

const Person = (props) => {
    return (
    <div>
        <p>{props.person.name} {props.person.number}</p>
        <button onClick={() => props.handleDelete(props.person.id)}>Delete</button>
    </div>
  )
}

export default Person