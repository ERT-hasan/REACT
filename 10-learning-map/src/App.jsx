import List from "./component/list";

function App() {
  
  // const studentArr= ["md shahnawaz","md wasim hasan","md nadeem hasan","md saif hasan"] 
  let studentArr

 return (
    <>     
    <h1 className="text-5xl">Learnner of MERN full stack</h1>
      <List list={studentArr}></List>
   
     
    </>
 )
 }

export default App;
