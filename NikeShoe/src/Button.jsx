import React from 'react'
import './Styles/Contact.css'
const Button = (props) => {
  return (
    <button className={props.isOutline  ? 'secondarybtn' : 'ContactBtn'} >
        <span className='btnicon'>
            {props.icon }
        </span>
        <span className='btntext'> {props.text}</span></button>
  )
}

export default Button