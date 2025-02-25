
import React from 'react';
const Student = () =>{
    return (
        <div className="container mt-5 p-4 shadow border rounded bg-light">
            <h2 className="mb-4">Student Details Form</h2>
            <form >
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter your age" />
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="grade" className="form-lebel">Grade</label>
                    <select className="form-select" id="grade">
                        <option select>Select your grade</option>
                        <option value="9">9th grade</option>
                        <option value="10">10th grade</option>
                        <option value="11">11th grade</option>
                        <option value="12">12th grade</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" />
                     <label className="form-check-label" htmlfor="male">male</label>
                    </div>
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                    <input className="form-check-input" type="radio"name="gender" id="female" />
                     <label className="form-check-label" htmlfor="female">female</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="other" />
                     <label className="form-check-label" htmlfor="other">other</label>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="termCheck"/>
                    <label className="form-check-label" htmlFor="termCheck">I agree to the  terms and conditions </label>

                </div>
                <button type="submit" className="btn btn-primary">submit</button>

            </form>
        </div>
    );
};
export default Student;