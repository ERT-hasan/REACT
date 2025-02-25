
import { useState } from "react";
import List from "./component/List";

function App() {
  console.log("painting App Component");

  const [studentArr,setStudentArr] = useState(["md shahnawaz","md wasim hasan","md nadeem hasan","md saif hasan"]);
 
  console.log("state value is:",studentArr);

  
  
  const onChangeHandler = (event) =>{
    if(event.key === "Enter"){
      console.log(event.target.value);
      setStudentArr([...studentArr,event.target.value])
      event.target.value ='';
      console.log(studentArr);
    }
  }

 return (
    <>     
    <h1 className="text-5xl">
      Learnner of MERN full stack
      </h1>
      <List list={studentArr}></List>
      <input type="text"  placeholder="New Student Name" onKeyDown={onChangeHandler}/>
   
     
    </>
 );
 };

export default App;

