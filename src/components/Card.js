import React from "react";
import Rectangle from 'react-rectangle';

import './comp.css';

const Card =  (props)=>{
    return (
        
        <div style = {{margin :'1em'}}>
    <Rectangle aspectRatio= {(5,3)} >
    
    <img width= "75 " src = {props.avatar_url} />
    
      <div style ={{display :'inline-block', marginLeft : 100 ,margin: 1}} >

      <div style = {{fontSize : '1.25em', fontWeight :"bold",marginLeft: 29, marginTop :5}}>
        {props.name}
      </div>
      
      <div>
        {props.company}
      </div>
      </div>
 </Rectangle >
 </div>
 
 
    );
    
    };

export default Card ;