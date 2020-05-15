import React from 'react'
import Person from './Person.js'

const Persons = (props) => {
    return (
        <div>
            {props.listToShow.map((persons, i) => <Person key={i} person={persons} />)}
        </div>
    )
}

export default Persons