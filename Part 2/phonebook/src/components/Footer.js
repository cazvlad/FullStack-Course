import React from 'react'

const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
  
    return (
      <div style={footerStyle}>
        <br />
        <p>Phonebook App, Vlad Cazacu, Brooks 47 Inc. (c) 2020</p>
      </div> 
    )
  }

  export default Footer