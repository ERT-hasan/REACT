import React, {useEffect,useState} from "react"; 


const MyComponent =()=>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(10);

    useEffect(() =>{
        console.log("my component is mounting..");
    },[]);

    useEffect(() =>{
        console.log("Count got update",count);
    }, [count2]);
    return (
        <div>
            <p>Count is {count}</p>
            <p>Count 2 is {count2}</p>
            <button onClick={() =>setCount(count +1)}>Update</button>
            <button onClick={() =>setCount2(count +1)}>Update 2</button>
        </div>
    )
}
export default MyComponent