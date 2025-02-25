import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const StateVsRef = () => {
  console.log("Repaint");

   const [stateClick,setStateClick] = useState(0); 
   const refClick = useRef(0);

  const onStateClickHandler =() =>{
    console.log("State Clicked");
    setStateClick(stateClick + 1)

  }

  const onRefClickHandler = () =>{
    console.log("Ref Clicked");
    refClick.current++;

  }




  return (
    <>
    <h1>State Clicked:{stateClick}</h1>
    <h1>State Clicked:{refClick.current}</h1>
    <button onClick={onStateClickHandler}>State</button>
    <button onClick={onRefClickHandler}>Ref</button>

    </>
  );
};

export default StateVsRef;