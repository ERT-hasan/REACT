import React, {useEffect,useState} from 'react';


const Timer = () =>{

    const [time,setTime] = useState(0);

    useEffect(() =>{
         // Mounted
         const timer = setTimeout(() =>setTime(time +1),1000);
    },[time])
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Cuurent Time is  {time} </p>
        </div>
    );
};

export default Timer;