import React, {useEffect,useState}from 'react'

const Callen = () => {

    const [date,setDate] = useState(new Date());

    useEffect (() =>{
        const timer = setInterval(() =>{
            setDate(new Date());
        },1000);
      return () =>clearInterval(timer);
    },[]);

  return (
    <div className="text-center p-4">
    <h2 className="text-2xl font-bold">Current Date & Time</h2>
    <p className="text-xl mt-2">{date.toLocaleDateString()}</p>
    <p className="text-lg text-gray-600">{date.toLocaleTimeString()}</p>
  </div>

  );
};

export default Callen