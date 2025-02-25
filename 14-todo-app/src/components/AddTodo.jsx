import Button from "./Button";

const AddTodo = () =>{

    const AddHandler = () =>{
        console.log(`Trying to Add item `)
    }
      return  <div className="container ">
          
      <div className="row kg-row">
        <div className="col-5">
        <input type="text" className="form-control" placeholder="Enter Todo Here"></input>
        </div>

        <div className="col-3">
        <input type="date" className="form-control" ></input>
        </div>

        <div className="col-2">
        <Button btnType='success' btnText='Add' handler={AddHandler}/>
        
        </div>
      </div>
    </div> 
};

export default AddTodo;