import React from 'react'

const Notification = (props) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }


    if (props.message === null) {
      return null
    } else {
        if (props.checker === false) {
            console.log(props.checker, 'success')
            return (
                <div className="success" style={successStyle}>
                    {props.message}
                </div>
            )
        } else {
            console.log(props.checker, 'error')
            return (
                <div className="error" style={errorStyle}>
                    {props.message}
                </div>
                )
        }
    }
  }

  export default Notification