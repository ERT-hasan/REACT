import React,{ useContext } from 'react'
import {ConterContext} from '../context/Counter'

const Counter = () => {
    const counterContext = useContext(ConterContext);
  return (
    <div>
        <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increament</button>
        <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decreament</button>
    </div>
  );
};

export default Counter