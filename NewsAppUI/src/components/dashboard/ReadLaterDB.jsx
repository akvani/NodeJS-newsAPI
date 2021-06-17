import React, {useState,useEffect}  from 'react'
import axios from 'axios';
import ReadNow from '../readNow/ReadNow';


export default function Dashboad() {

   
    const [readlaterdata,ReadLaterCallback]=useState([ ]);


useEffect(function()
{
axios.get('http://localhost:3001/api/v1/news',
{
  headers:{'Authorization':`Bearer ${localStorage.getItem("mytoken")}`}
}
).then
( (result)=>
  {
    console.log("Read Later Data");
   console.log(result.data);
   ReadLaterCallback(result.data);
  } 
)
.catch((err)=>console.log(err))
}
,[]); //End of useEffect


const removelist = (myid)=>
{
axios.delete(`http://localhost:3001/api/v1/news/${myid}`,
{
    headers : {
    'Content-type':'application/json',
    'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
    }
  })
.then( res=>
  {
    if(res.status==200)
    {
  console.log('deleted');
  ReadLaterCallback(readlaterdata.filter( user=> user.id !=myid ));
    }
  }
  )
.catch( (err)=>console.log(err))
  

}


    return (
    
      <div className="container">
        <div className="row"> 
              
          <div className="col-md-12 my-12">  
              {
          <h1>{readlaterdata.map (
                  (newsRL)=> 
                  <ReadNow key={newsRL.id} id={newsRL.id} name={newsRL.name} 
                  title={newsRL.title} 
                  url={newsRL.url}
                  urltoImage={newsRL.urlToImage}  
                  description={newsRL.description}
                 removeevent={removelist}              
                  />
                   )}</h1>
          }
          </div>
       </div>
        </div>
     
    )
}