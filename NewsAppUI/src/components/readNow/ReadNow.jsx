import React from 'react'

export default function Newsfeed(props) {
    
    const remove=(e)=>
    {
  console.log(e);    
     props.removeevent(e);      
    }
    return (     
  <div className="card" style={{width: "36rem"}}>
  
    <div className="card-body">
    <h6> 
    <p className="card-title"><a href={props.url}>{props.title}</a></p>
    <p  className="card-text" >{props.description} </p>
   {/* /*<p><i className="card-text" style={{color:"blue"}}>{props.url}</i></p> */}
   <img className="card-text" src={props.urltoImage} className="img-rounded" alt="News icon" width="304" height="236"></img>

   <span className="float-right" style={{"cursor":"pointer"}} 
    onClick= {()=>remove(props.id)}>
    <i style={{color:"green"}}> Remove from Read Later list</i>
    </span>
    </h6>
    </div>
  </div>
    )
}
