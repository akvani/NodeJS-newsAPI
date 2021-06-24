import React, {useState,useEffect}  from 'react'
import axios from 'axios';
import Card1 from '../card/Card'
import uuid from 'uuidv4'
import { Container, Row, Col } from 'react-bootstrap'

export default function Dashboad() {

    const [newsdata,myCallback]=useState([ ]);
    const [readlaterdata,ReadLaterCallback]=useState([ ]);
    const [category,categoryCallbak]=useState(['business'])

    useEffect(function()
    {
      
   // axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`).then
   axios.get(`http://localhost:8080/source/api/news/category/${category}`).then
    ( (result)=>
      {
       // console.log(category + " from news API");
      // console.log(result.data.articles);
       myCallback(result.data.articles);
      } 
    )
    .catch((err)=>console.log(err))
    }
    ,[]); //End of useEffect

useEffect(function()
{
axios.get('http://localhost:8080/newsdb/readnow',
{
  headers:{'Authorization':`Bearer ${localStorage.getItem("mytoken")}`}
}
).then
( (result)=>
  {
    //console.log("Read Later Data");
   //console.log(result.data);
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
 
  axios.post('http://localhost:8080/newsdb/readlater',mydata,
  {
    headers : {
    'Content-type':'application/json',
    'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
    }
  })
  .then(
    (res)=>
    {
     // console.log("readlater")
  // console.log(res.data);
   myCallback([...newsdata,res.data]);
   ReadLaterCallback([...readlaterdata,res.data])
    }
  )
  .catch(
    (err)=>console.log(err)
  )

}

const getcategory=(category)=>{
  categoryCallbak(category);
  console.log(category);
  axios.get(`http://localhost:8080/source/api/news/category/${category}`).then
  ( (result)=>
    {
    // console.log(result.data.articles);
     myCallback(result.data.articles);
    } 
  )
  .catch((err)=>console.log(err))

}


    return (
    
      <div>              
        <Container>
             <Row>
                <Col >            
                   <h3> Select Category to display news</h3>       
      
<div className="form-check form-check-inline" onClick={() => {getcategory("business"); }} >
<input type="radio" value={"sports"} name="category" checked={category === "business"}/> Business
</div>

<div  className="form-check form-check-inline" onClick={() => { getcategory("sports"); }} >
<input type="radio" value={"sports"} name="category" checked={category === "sports"}/> Sports
</div>

<div className="form-check form-check-inline" onClick={() => { getcategory("entertainment"); }} >
<input type="radio" value={"entertainment"} name="category" checked={category === "entertainment"} /> Entertainment
</div>

<div className="form-check form-check-inline" onClick={() => { getcategory("science"); }} >
<input type="radio" value={"science"} name="category" checked={category === "science"}/> Science
</div>

<div className="form-check form-check-inline" onClick={() => { getcategory("technology"); }} >
<input type="radio" value={"technology"} name="category" checked={category === "technology"} /> Technology
</div>
<h1 className='h1'>{ category} Headline</h1>
        </Col>
      </Row>
  </Container>        
        
        {/* <Container fluid >
        <Row> */}
          {/* <div className="col-md-12 my-12">  
              { */}
      
                 {newsdata.map (
                  (news)=> <Col md={3} sm={6} xs={12}>
                  
                  <Card1  key={uuid} id={news.id} name={news.name} 
                  title={news.title} 
                  url={news.url}
                  description={news.description}
                  urltoImage={news.urlToImage}
                  readLaterevent={readLater}
                  />  </Col>
                   ) }

                {/* }         
          </div>   */}
          {/* </Row>      
          </Container> */}
        </div>
       
     
    )
}