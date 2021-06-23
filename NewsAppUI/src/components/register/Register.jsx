import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

export default function Register() {
    const history=useHistory();

    const[firstname,setfirstname]=useState('');
const[secondname,setsecname]=useState('');
const[emailid,setemailid]=useState('');
const[phoneno,setphoneno]=useState('');
// useEffect(() => {
//   setfirstname(e.target.elements.firstname.value);
//   setsecname(e.target.elements.secondname.value);
//   setemailid(e.target.elements.emailid.value);
//   setphoneno(e.target.elements.phoneno.value);
// }, [])

const submitUser=(data)=>
{
  console.log(data)
  axios.post('http://localhost:8080/auth/v1/register',data,

{
    headers: {
        'Content-Type':'application/json'
    }
}
).then ( 
    (res)=>
    {
     console.log(res);
      //  history.push('dashboard')
    } ).catch( err=> console.log(err))
    console.log("User Registration success");
    history.push('login');
}

    return (
        <div>
<form onSubmit={ (e)=> 
    {
     // console.log("Event value "+e.target.elements.firstname.value)
      // setfirstname(e.target.elements.firstname.value);
      // setsecname(e.target.elements.secondname.value);
      // setemailid(e.target.elements.emailid.value);
      // setphoneno(e.target.elements.phoneno.value);
     // console.log("Event values   "+firstname+secondname+emailid+ phoneno )
      const data={
         firstname:e.target.elements.firstname.value,
    secondname:e.target.elements.secondname.value,
    emailid:e.target.elements.emailid.value,
    phoneno:    e.target.elements.phoneno.value
      }
    submitUser(JSON.stringify(data));
    }
            }>

<div className="form-group">
  
    <label htmlFor="firstname">Enter First Name</label>
    <input type="text" className="form-control" id="firstname"/>
  </div>      
  
  <div className="form-group">
    <label htmlFor="secondname">Enter second Name</label>
    <input type="text" className="form-control" id="secondname"/>
   <label htmlFor="emailid">Enter Email Id</label>
    <input type="email" className="form-control" id="emailid"/>
  </div>      
  
  <div className="form-group">
    <label htmlFor="phoneno">Enter Phone no</label>
    <input type="number" className="form-control" id="phoneno"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
 
</form>  

        </div>
    )
}
