import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Form Submitted!', event.target)
    const personObject = {
        name: newName,
        number: newNumber
    }
    if (persons.some(p => p.name === personObject.name)) {
        console.log('ERROR! Duplicate name found!')
        window.alert(`${newName} is already added to phonebook!`)
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        console.log('New contact added successfully!')
    } 
  }

  const handleNameChange = (event) => {
    console.log('typing name...', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('typing phone number...', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log('filtering by...', event.target.value)
    setNewFilter(event.target.value)
  }

  let listToShow = persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter
            handleFilter={handleFilter}
            newFilter={newFilter}
            persons={persons}
        />
      <h3>Add a new contact</h3>
        <PersonForm 
            addPerson={addPerson}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            newName={newName}
            newNumber={newNumber}
        />
      <h3>Contacts</h3>
        <Persons 
            key={persons.name}
            persons={persons}
            listToShow={listToShow} 
        />
    </div>
  )
}

export default App