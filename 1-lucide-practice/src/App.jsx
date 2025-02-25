

function App() {
 

  return (
    <>
      <center>
     <h2 className="mb-4"> BOOTSTRAP  SHADOW CLASSES</h2>
     <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded" style={{width:'750px'}}>No shadow</div>
     <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Small shadow</div>
     <div class="shadow p-3 mb-5 bg-body-tertiary rounded">Regular shadow</div>
     <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div>
     </center>
               <center>
        <h2 className="mb-4">simple bootstrap table </h2>
        <table className="table table-strip table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id-No</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Mobile-Number</th>
              <th scope="col">Email</th>

            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope=" row">1</th>
              <td>md wasim</td>
              <td>hasan</td>
              <td>8651406518</td>
              <td>mdwasimhasan454@gmail.com</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>md nadeem</td>
              <td>hasan</td>
              <td>8317785617</td>
              <td>mdnadeemhasan414@gmail.com</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>md saif</td>
              <td>hasan</td>
              <td>8235153976</td>
              <td>mdsaifhasan786@gmail.com</td>
              
            </tr>
             <tr>
              <th scope="row">4</th>
              <td>Md adnan</td>
              <td>hasan</td>
              <td>2658362541</td>
              <td>mswasi@123gmail.com</td>
            </tr>
          </tbody>

        </table>
        </center>


        <center>
          <div className="container mt-4">
            <h2 className="mb-3">Simple Flex Example</h2>
            <div className="d-flex justify-content-between align-items-center bg-light p-3">
              <div className="p-2 bg-primary text-white">Left</div>
              <div className="p-2 bg-success text-white">center</div>
              <div className="p-2 bg-info text-white">Right</div>
              

            </div>

          </div>
        </center>
           <br /> <br /> <br />
        <center>
          <h2 className="mb-4"> SIMPLE BOOTSTRAP GRID EXAMPLE</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="p-3 bg-primary text-white">column 1</div>

            </div>
            <div className="col-sm-4">
              <div className="p-3 bg-success text-white">column 2</div>

            </div>
            <div className="col-sm-4">
              <div className="p-3 bg-info text-white">column 3</div>

            </div>

          </div>


          <div className="row mb-3">
            <div className="col-md-">
              <div className="p-3 bg-warning text-dark mt-3">column 4</div>
            </div>
            <br />
            <div className="col-md-">
              <div className="p-3 bg-danger text-dark mt-3">column 6</div>
            </div>

          </div>
        </center>
         <br /> <br /> <br />

         <center>
          <h2> Example Heading  <span class="badge-bg-secondary">New</span></h2>
          <br />
          <button type="button" class="btn btn-primary">
            Notifications <span class="badge text-bg-secondary">4+</span>
            
          </button> <br />
          <button type="button" class="mt-3 btn btn-primary position-relative">
            Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button> <br /> <br />

         </center> <br /> <br /> <br /> 

         <h1 class="text-center " >USING ALERT </h1>
         
         <div class="alert alert-primary text-center"  role="alert">
          A SIMPLE PRIMARY  ALERT CHECK IT OUT
         </div>
         <div class=" text-center alert alert-secondary " role="alert">
          A SIMPLLE SECONDARY ALERT CHECK IT OUT
         </div>
         <div class=" text-center alert alert-success " role="alert">
          A SIMPLLE SUCCESS ALERT CHECK IT OUT
         </div>
         <div class=" text-center alert alert-danger " role="alert">
          A SIMPLLE DANGER ALERT CHECK IT OUT
         </div> <br /> <br /> <br />
         
         <h1 class="text-center">USING SPINNER</h1>
         <div class="text-center spinner-border text-primary" role="status">
           <span class="visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-secondary" role="status">
           <span class="visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-success" role="status">
           <span class="visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-danger" role="status">
           <span class="visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-info" role="status">
           <span class="visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-light" role="status">
           <span class="    visually-hidden">loading...</span>
         </div>
         <div class=" text-center spinner-border text-dark" role="status">
           <span class=" visually-hidden">loading...</span>
         </div>

         <br /> <br />

         <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
           <br />
           <h1 class=" text-center text-secondary"> PROGRESS BAR</h1>

           <br />
           <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
       <br />

       <h1 className="text-center text-red-950">BOOTSTRAP FORM EXAMPLE</h1>
       <div className="d-flex justify-content-center align-items-center" style={{ height: "20vh",  }}>
       <form >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-lebel">Email address</label>
            <input type="" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
           <div id="emailHelp" className="form-text"> we ll' never share yours email with anyone else</div>
          </div>
       </form>
       </div>
    </> 
  )
}

export default App
