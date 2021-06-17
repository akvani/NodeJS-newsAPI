import React, {useState,useEffect}  from 'react'
import axios from 'axios';
import Card from '../card/Card'

export default function Dashboad() {

    const [newsdata,myCallback]=useState([ ]);
    const [readlaterdata,ReadLaterCallback]=useState([ ]);

    useEffect(function()
    {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2b8b823d5cf54290bae7409fb2a80d38').then
    ( (result)=>
      {
       console.log(result.data.articles);
       myCallback(result.data.articles);
      } 
    )
    .catch((err)=>console.log(err))
    }
    ,[]); //End of useEffect

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

const readLater= (mydata)=>
{
  console.log("Inside parent");
  console.log(mydata);
 
  axios.post('http://localhost:3001/api/v1/news',mydata,
  {
    headers : {
    'Content-type':'application/json',
    'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
    }
  })
  .then(
    (res)=>
    {
   // console.log(res.data);
   myCallback([...newsdata,res.data]);
   ReadLaterCallback([...readlaterdata,res.data])
    }
  )
  .catch(
    (err)=>console.log(err)
  )

}

    return (
    
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-12">  
              {
      
                 <h1>{newsdata.map (
                  (news)=> 
                  <Card key={news.id} id={news.id} name={news.name} 
                  title={news.title} 
                  url={news.url}
                  description={news.description}
                  urltoImage={news.urlToImage}
                  readLaterevent={readLater}
                  />
                   )}</h1>

                }         
          </div>        
         
        </div>
        </div>
     
    )
}