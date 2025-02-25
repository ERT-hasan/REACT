const StudentList = () =>{
    const students = ['wasim','hasan', 'saif','adnan','saqib','waqar','tauheed','wasi']


    return <ol>

       {
        students.map(student => <li>{student}</li> )


        }
       
    </ol>
     
}

export default StudentList