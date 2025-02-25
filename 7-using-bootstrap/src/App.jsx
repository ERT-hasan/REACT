

function App() {
  

  return (
    <>
    
    <div className="bg-primary mb-3 ">.bg primary</div>
    <div className="bg-primary-subtile">bg-primary-subtile</div>
    <div className="bg-secondary">bg-secondary</div>
    <div className="bg-secondary-subtle">.bg-secondary-subtle</div>
    <div className="bg-success">.bg-success</div>
    <div className="bg-success-subtle">.bg-success-subtle</div>
    <div className="bg-danger">.bg-danger</div>
    <div className="bg-danger-subtle">.bg-danger-subtle</div> <br /> <br />
        <center>
      <h2 className="mb-3">Margin Example</h2>
      <div className="bg-light border p-3 mb-3 " style={{width:'650px'}}>
        <div className="bg-primary text-white p-3 mc-3 m-2"style={{width:'600px'}}> m-2 (Margin All Side)</div>
      </div> <br />
      <div className="bg-light border p-3 mb-3 mc-3" style={{width:'650px'}}>
        <div className="bg-success text-white p-4 mb-6 my-3" style={{width:'600px'}}>my-3(Verticle Margin)</div>
      </div> <br />
       
       <div className="bg-light border p-3 mb-3 mt-3"style={{width:'650px'}}>
        <div className="bg-danger text-white p-4 mc-3 mx-auto" style={{width:'600px'}}>max-auto(center horizontall)</div>
       </div>
      
       </center><br /> <br />

       <center>
        <h2 className="mb-3">Padding Example</h2>
        <div className="bg-primary text-white p-3  mb-3" style={{width:'750px'}}>p-3(Padding All Sides)</div>
        <div className="bg-success text-white px-4 py-2  mb-3" style={{width:'750px'}}>px-2 py-2(horizont and Verticle padding)</div>
        <div className="bg-danger text-white pt-4  mb-3"style={{width:'750px'}}>pt-4(top padding only)</div>

       </center>

       <br /> <br />

       <center>
       <div className="container mt-4">
         <h1 className="mb-4">Bootstrap Font Size Example</h1>
         <p className="fs-1">fs-1:this is largest font size(25rem /40px)</p>
         <p className="fs-2">fs-2:this is second font size(25rem /40px)</p>
         <p className="fs-3">fs-3:this is third font size(25rem /40px)</p>
         <p className="fs-4">fs-4:this is fourth font size(25rem /40px)</p>
         <p className="fs-5">fs-5:this is five font size(25rem /40px)</p>
         <p className="fs-6">fs-6:this is six font size(25rem /40px)</p>
       </div>
       </center>
            <div className="m-3">
              <ul className="list-group list-group-numbered">
                <li className="list-group-item">Home</li>
                <li className="list-group-item active">Contact</li>
                <li className="list-group-item">PRODUCTS</li>
                <li className="list-group-item disabled">pay</li>
               
              </ul>
              </div>
            
    
    </>
  )
}

export default App
