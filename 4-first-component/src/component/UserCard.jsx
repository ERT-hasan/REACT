import React from 'react'
import wasim3 from '../assets/wasim3.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
       <p id='user-name'>{props.name}</p>
       <img id='user-img' src={wasim3} alt='Love' />
       <p id= 'user-desc'>Description of love ert hasan</p>
    </div>
  )
}

export default UserCard
