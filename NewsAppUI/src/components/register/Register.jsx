import React from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

export default function Register() {
    const history=useHistory();

//     const[firstname,setfirstname]=useState('');
// const[secondname,setsecname]=useState('');
// const[emailid,setemailid]=useState('');
// const[phoneno,setphoneno]=useState('');
// useEffect(() => {
//   setfirstname(e.target.elements.firstname.value);
//   setsecname(e.target.elements.secondname.value);
//   setemailid(e.target.elements.emailid.value);
//   setphoneno(e.target.elements.phoneno.value);
// }, [])

const submitUser=(data)=>
{
  
  const querydata={query:`mutation{register(userInput:{firstname:"${(data.firstname)}",
  secondname:"${(data.secondname)}",
  emailid:"${(data.emailid)}",
  password:"${(data.password)}",
  phoneno:"${(data.phoneno)}"}){firstname,emailid}}`};

  let body=JSON.stringify(querydata);
    console.log(body);
  
  axios.post('http://localhost:8080/auth/v1/',body,{
    headers: {
        'Content-Type':'application/json'
    }
}
).then ( 
    (res)=>
    {
      console.log(res.data)
     alert("User is successfully registered")
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
    //userid:e.target.elements.userid.value,
    password:e.target.elements.password.value,
    phoneno: e.target.elements.phoneno.value
      }
      console.log(data);
   // submitUser(JSON.stringify(data));
    submitUser(data);
    }
            }>


<Container style={{ padding: '20px' }}>    
 <Row className="justify-content-md-center">
    <Col md={'4'} className="bg-light" style={{ padding: '20px' }} >
  <div className="form-group">
    <label htmlFor="firstname">Enter First Name</label>
    <input type="text" className="form-control" id="firstname"/>
  </div>      
  
  <div className="form-group">
    <label htmlFor="secondname">Enter second Name</label>
    <input type="text" className="form-control" id="secondname"/>
</div>
<div>
   <label htmlFor="emailid">Enter Email Id</label>
    <input type="email" className="form-control" id="emailid"/>
  </div>
  {/* <div>
  <label htmlFor="userid">Enter userid</label>
    <input type="userid" className="form-control" id="userid"/>
  </div> */}
  <div>
  <label htmlFor="password">Enter password</label>
    <input type="password" className="form-control" id="password"/>
  </div>     
  
  <div className="form-group">
    <label htmlFor="phoneno">Enter Phone no</label>
    <input type="number" className="form-control" id="phoneno"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
 </Col>
 </Row>
 </Container>
</form>  

        </div>
    )
}
