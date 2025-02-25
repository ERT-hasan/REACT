import React from 'react'
import { useState } from 'react';
import  { useRef } from 'react';

const Testform = () => {


     console.log("painting form");

    const {firstNameVal, setFirstName} =useState();

    const clicks = useRef(0);
    const firstName = useRef();
    const lastName = useRef();
    const dob = useRef();
        
    const firstNameChangeHandler = (event) =>{
      setFirstName(event.target.value)
    }
        const submitHandler = (event) => {
        event.preventDefault();
        console.log(firstName.current.value);
        console.log(lastName.current.value);
        console.log(dob.current.value);

    }

  return (
    <div>
        <h1>{firstNameVal} button clicked:{clicks.current} time</h1>
        <form action="/submit-data" onSubmit={submitHandler}>
            <input type="text"ref={firstName} placeholder='First-Name' 
            name="firstName" onKeyDown={firstNameChangeHandler} /> <br />
            <input type="text" ref={lastName} placeholder='last-Name'
            name="lastName" /> <br />
            <label htmlFor="dob">DOB</label>
            <input id="dob" ref={dob} type="date" name="dob"/> <br />
            <input type="submit" onClick={() =>{clicks.current +=1}}/>
        </form>
    </div>
  )
}

export default Testform