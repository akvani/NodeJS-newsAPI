import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
//import PropTypes from "prop-types";

export default function Card(props) {
    // const[author,setname]=useState('');
    // const[key,setkey]=useState('');
    // const[title,settitle]=useState('');
    // const[url,seturl]=useState('');
    // const[urlToImage,seturltoImage]=useState('');
    // const[description,seturdescription]=useState('');

    // useEffect(() => {
    //   setkey(props.key);
    //     setname(props.author);
    //     settitle(props.title);
    //     seturl(props.url);
    //     seturltoImage(props.urltoImage)
    //     seturdescription(props.description)
    // }, [])

    const readLater=(news)=>
    {
   console.log(news);
     props.readLaterevent(JSON.stringify(news));
      
    }
    return (

      <div>
            
      <div className="card" style={{width: "26rem"}}>

<div className="card-body" id={props.key}>
<h6>

<span className="float-right" style={{"cursor":"pointer"}} 
onClick= {()=>readLater(props)}>
<i style={{color:"green"}}> Read Later</i>
</span>
<p className="card-title"><a href={props.url}>{props.title}</a></p>
<p className="card-text">{props.description}</p>
<p className="card-text"><b>Author:</b> {props.author ? props.author : 'NA'}</p>
<img className="card-text" src={props.urltoImage} className="img-rounded" alt="News icon" width="304" height="236"></img>
</h6>
</div>

  </div>
  </div>
//    <div>
//       <Container fluid>
//         <Row>
//          <Col>
            
//   <div className="col-sm-6 col-md-6">
//    <div className="card" >
  
//     <span className="float-right" style={{"cursor":"pointer"}} 
//     onClick= {()=>readLater()}>
//     <i style={{color:"green"}}> Read Later</i>
//     </span>
//     <img className="card-img-top" src={this.props.urlToImage} alt="Not found"></img>
//     <div className="card-body">
//     <h5 className="card-title"><a href={props.url}>{props.title}</a></h5>
//      <p className="card-text">key: {props.key}</p>
//      <p className="card-text">{props.description}</p>
//      <p className="card-text"><b>Author:</b> {props.author ? props.author : 'NA'}</p>
//      <img className="card-text" src={props.urltoImage} className="img-rounded" alt="News icon" width="304" height="236"></img>
//     </div>
//    </div>
//   </div>
//       </Col>
//     </Row>
//   </Container>
// </div>
    )
}

