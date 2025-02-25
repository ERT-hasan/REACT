import {createContext, useState} from 'react';


 export const ConterContext = createContext(null);

 export const CounterProvider =(props)=>{

    const [count,setCount] =  useState(5);

    return (
        <ConterContext.Provider value={{count, setCount,name:"md wasim"}}>
            {props.children}
        </ConterContext.Provider>
    )

 }
