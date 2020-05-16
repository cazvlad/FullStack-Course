import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ errorCheck, setErrorCheck ] = useState(false)

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
            setErrorCheck(false)
            setErrorMessage(`${personObject.name}'s number was changed successfully!`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorCheck(true)
            setErrorMessage(`${personObject.name} was already removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== dp.id))
          })
      } else {
          console.log(`Number change denied for ${dp.name}...`)
      }
    } else {
        personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setErrorCheck(false)
            setErrorMessage(`${personObject.name} was added successfully!`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
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
          setErrorCheck(false)
          setErrorMessage(`${dp.name} was removed from the Phonebook`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorCheck(true)
          setErrorMessage(`${dp.name} was already removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
        })
    } else {
        console.log(`Delete denied for ${dp.name}...`)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <Notification message={errorMessage} checker={errorCheck}/>
      <h2>Search for</h2>
        <Filter
          handleFilter={handleFilter}
          newFilter={newFilter}
          persons={persons}
        />
      <h2>Add a new contact</h2>
        <PersonForm 
          addPerson={addPerson}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          newName={newName}
          newNumber={newNumber}
        />
      <h2>Contacts</h2>
        <Persons 
          key={persons.id}
          persons={persons}
          newFilter={newFilter} 
          handleDelete={handleDelete}
        />
      <Footer />
    </div>
  )
}

export default App