import React from "react";


export default function MediaCard(props) {
  return (
     
          <div className="devcards"> 
              <div class="card">
    <div class="bannerdeveloper">
      <img src={props.image}/>
    </div>
    <div class="menu">
      
    </div>
    <h2 class="name">{props.name}</h2>
    <div class="title">{props.stack}</div>
    <div class="actions">
       
    </div>
   
</div>    
          </div>
        
  );
}
