import React, { useState } from 'react'
import axios from "axios"
function Insert() {
    let[input , setInput] = useState({
        rollno : "",
        name : "",
        city : "",
        fees : ""
    })
    function handleInput(e)
    {
        let{name , value} = e.target
        setInput({
            ...input,
            [name] : value
            
        })
        
    }
    function submitHandler()
    {
        let api = "http://localhost:8000/students/savedata"
        axios.post(api , input).then((res)=>{
            console.log(res.data)
            alert("data saved")
        })
    }
  return (
    <>
    <h1>Insert page</h1>
    <hr />
    Enter rollno : <input type="text" name='rollno'  onChange={handleInput}  /> <br />
    Enter name : <input type="text" name='name'  onChange={handleInput}  /> <br />
    Enter city : <input type="text" name='city'  onChange={handleInput}  /> <br />
    Enter fees : <input type="text" name='fees' onChange={handleInput} /> <br />
<button onClick={submitHandler}>Save</button>
    </>
  )
}

export default Insert