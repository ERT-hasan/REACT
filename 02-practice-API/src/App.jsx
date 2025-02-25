import {useContext} from 'react';
import Counter from "./components/Counter";
import {ConterContext} from './context/Counter'

function App() {

  const counterState = useContext(ConterContext);
  
    console.log("Context",counterState)
  return (
   
      
      <div className="App">
        <h1>Count is  {counterState.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        
      </div>
    
  );
};

export default App
