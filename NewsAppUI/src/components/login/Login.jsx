import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Login() {

    const history=useHistory();
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');

const loginUser= (e) =>{
    e.preventDefault();
    
axios.post('http://localhost:8080/auth/v1',
{username,password},
{
    headers: {
        'Content-Type':'application/json'
    }
}
).then ( 
    (res)=>
    {
      console.log(password); 
       localStorage.setItem('mytoken',res.data?.token);
        localStorage.setItem('isAuthenticated',"true");
        localStorage.setItem('username',username);
        history.push('dashboard')
    } ).catch( err=> console.log(err))




}

// if(localStorage.getItem('isAuthenticated')==='true')
// {
//     history.push('dashboard');
   
// }



    return (
        <div>
          <form onSubmit={ (e)=> 
{
loginUser(e);
}
}>


{/* <div className="form-group"> */}
<Container style={{ padding: '100px' }}> 
    {/* <div className="container" >     */}
  
    <label htmlFor="username">Enter Name</label>
    <input type="text" className="form-control" id="username" 
   
    onChange={
(evt)=>setUsername(evt.target.value)
    }/>
  {/* </div> */}

      
  
  {/* <div className="form-group"> */}
    <label htmlFor="password">Enter Password</label>
    <input type="password" className="form-control" id="password"
     
    onChange={
        (evt)=>setPassword(evt.target.value)
            }/>
    
  {/* </div> */}
  
  <button type="submit" className="btn btn-primary">Login</button>
  {/* </div> */}
  {/* </div> */}
  </Container>
</form>  

        </div>
    )
}
