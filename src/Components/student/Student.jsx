import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Student = () => {
    var [inputs,setInputs]=useState({"admno":'',"sname":'',"age":''})




const readinputs=(event)=>{
    const {name,value} = event.target 
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)

}

const saveData =() =>{
    console.log("clicked")

    console.log(inputs)
    axios.post("http://localhost:3005/new",inputs)
    .then((response)=>{
        alert("Record saved")

    })
    .catch(err=>console.log(err))
}


  return (
    <div>
        <center>
      <h1>Student details</h1>
      <form>
      <TextField id="outlined-basic" value={inputs.admno} label="Admission no" name='admno'  onChange={readinputs}/><br></br>
      <TextField id="outlined-basic" value={inputs.sname} label="Name" name='sname' onChange={readinputs}/><br></br>
      <TextField id="outlined-basic" value={inputs.age} label="Age" name='age' onChange={readinputs}/><br></br>
      <Button variant="contained" color="success"onClick={saveData}>
  Save
</Button>
<Button variant="contained" color="success">
  view
</Button>
      </form>
      </center>
    </div>
  )
}

export default Student
