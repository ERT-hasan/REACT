import Button from "./Button";

const NumberPad = ()=>{

  const buttons = ["c","1","2","+","3","4","-","5","6","*","7",
        "8","/","=","9"];
   
    return <>
       {buttons.map(text => <Button text={text}/>)}
    </>
};

 export default NumberPad;