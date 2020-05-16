import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Form Submitted!', event.target)
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some(p => p.name === personObject.name)) {
      console.log('ERROR! Duplicate name found!')
      let dp = persons.find(p => p.name === personObject.name)
      let changedPerson ={ ...dp, number: newNumber}
      console.log(dp.id)
      console.log(`Attempting to change ${dp.name}'s number...`)
      if (window.confirm(`${dp.name} is already in the Phonebook. Do you want to update their number?`)) {
        console.log(`Number change confirmed for ${dp.name}...`)
        personService
          .changeNumber(dp.id, changedPerson)
          .then (response => {
            setPersons(persons.map(person => person.id !== dp.id ? person : response))
            setNewName('')
            setNewNumber('')
            console.log('Number changed successfully!');
          })
      } else {
          console.log(`Number change denied for ${dp.name}...`)
      }
    } else {
        personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            console.log('New contact added successfully!')
          })
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

  const handleDelete = (id) => {
    let dp = persons.find(p => p.id === id)
    console.log(`Attempting to delete... ${dp.name}`)
    if (window.confirm(`Do you want to delete ${dp.name} from the Phonebook?`)) {
      console.log(`Delete confirmed for ${dp.name}...`)
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== id))
          console.log('Contact deleted successfully!')
        })
    } else {
        console.log(`Delete denied for ${dp.name}...`)
    }
  }

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
          key={persons.id}
          persons={persons}
          newFilter={newFilter} 
          handleDelete={handleDelete}
        />
    </div>
  )
}

export default App