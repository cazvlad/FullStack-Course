import React from 'react'
import Person from './Person.js'

const Persons = (props) => {
    let listToShow = props.persons.filter(p => p.name.toLowerCase().includes(props.newFilter.toLowerCase()))
    return (
        <div>
            {listToShow.map((persons) => <Person key={persons.id} person={persons} handleDelete={props.handleDelete} />)}
        </div>
    )
}

export default Persons