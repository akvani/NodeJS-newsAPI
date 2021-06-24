import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'



export default function Login() {
    const history=useHistory();
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
    
   

const loginUser= (e) =>{
    e.preventDefault();
    console.log(username+password)
    const querydata={query:`query{login(email:"${username}", password:"${password}"){token}}`};

  let body=JSON.stringify(querydata);
    console.log(body); 
axios.post('http://localhost:8080/auth/v1',body,
{
    headers: {
        'Content-Type':'application/json'
    }
}
).then ( 
    (res)=>
    {
        //console.log(res.data)
        //console.log(res.data.data.login.token);
        if (res.data.data.login.token==="")
        {
            console.log("Please check userId and password"); 
        }
       else{
        //console.log(password); 
        localStorage.setItem('mytoken',res.data?.token);
         localStorage.setItem('isAuthenticated',"true");
         localStorage.setItem('username',username);
         history.push('dashboard')
       }
      
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
<Container style={{ padding: '20px' }}> 
    {/* <div className="container" >     */}
    <Row className="justify-content-md-center">
    <Col md={'4'} className="bg-light" style={{ padding: '20px' }} >
  
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
  </Col>
  </Row>
  </Container>
</form>  

        </div>
    )
}
