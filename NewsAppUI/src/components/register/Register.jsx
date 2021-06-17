import React from 'react'
import {useHistory} from 'react-router-dom';

export default function Register() {
    const history=useHistory();

//     const[firstname,setfirstname]=useState('');
// const[secname,setsecname]=useState('');
// const[emailid,setemailid]=useState('');
// const[phoneno,setphoneno]=useState('');
const submitUser=()=>
{
    console.log("User Registration success");
    history.push('login');
}

    return (
        <div>
<form onSubmit={ (e)=> 
    {
    submitUser(e);
    }
            }>

<div className="form-group">
  
    <label htmlFor="firstname">Enter First Name</label>
    <input type="text" className="form-control" id="firstname"/>
  </div>      
  
  <div className="form-group">
    <label htmlFor="secondname">Enter second Name</label>
    <input type="text" className="form-control" id="secname"/>
              <label htmlFor="firstname">Enter Email Id</label>
    <input type="email" className="form-control" id="emailid"/>
  </div>      
  
  <div className="form-group">
    <label htmlFor="secondname">Enter Phone no</label>
    <input type="number" className="form-control" id="phoneno"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
 
</form>  

        </div>
    )
}
