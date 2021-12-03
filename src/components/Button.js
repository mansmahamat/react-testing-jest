import React from 'react'
import './button.css'

function Button({label}) {
  return (
    <div 
      data-testid="button" 
      className="button-style"
      href="https://create-react-app.dev/" 
      style={{backgroundColor: "lightseagreen"}}
      onClick={() => console.log('yes')}>
      {label}
    </div>
  )
}

export default Button
