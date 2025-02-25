import { useReducer,useRef, useState} from "react"

const counterReducer = (currentState,action) =>{
  console.log('In Reducer',currentState,action)
let newState = currentState;


  switch(action.type ){
    case 'INCREMENT':
    newState += 1;
    break;
   case 'DECREMENT':
    newState -= 1;
    break;
    case 'RESET':
      newState =0;
      break;
    case 'DOUBLE':
      newState *= 2;
      break;
    case 'CHANGEBY':
      newState = newState +parseInt(action.payload.num)
    default:
      break;
} 
   return newState;
}



function App() {
  // const [counterVal,counterDispatch] = useReducer(counterReducer,0);

  const initialState = 0;
  const changeByInput = useRef();
  const[counterVal,counterDispatch] = useReducer(counterReducer,initialState);

  const handleIncrement = () =>{
    counterDispatch({
      type:"INCREMENT"

    });

  }
  const handleDcrement = () =>{
    counterDispatch({
      type:"DECREMENT"
    });
    }
    const handleChangeBy =() =>{
      const num= changeByInput.current.value;
      changeByInput.current.value = 0;
      counterDispatch({
        type:"CHANGEBY",
        payload:{ num}
      });
    }
  return (
    <>
      <h1>count: {counterVal}</h1>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDcrement}>Decreament</button>
      <button onClick={() =>counterDispatch({type:"RESET"})}>Reset</button>
      <button onClick={() =>counterDispatch({type:"DOUBLE"})}>Double</button>
      <button  onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changeByInput} placeholder="number"/> 
    </>
  )
}
export default App
