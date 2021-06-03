import React from 'react'

const successStyle = {
  color: 'pink',
  background: 'lightblue',
  font_size: 25,
  border_style: 'solid',
  border_radius: 10,
  padding: 13,
  margin_bottom: 13
}

const errorStyle = {
  color: 'blue',
  background: 'yellow',
  font_size: 25,
  border_style: 'solid',
  border_radius: 10,
  padding: 13,
  margin_bottom: 13
}

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    if (message.includes('ERROR')){
      return (
        <div style={errorStyle} className="error">
          {message}
        </div>
      )
    } else {
      return (
        <div style={successStyle} className="error">
          {message}
        </div>
      )
    }
  }

export default Notification