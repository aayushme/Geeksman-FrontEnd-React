import React, { Component } from 'react';

class Developer extends Component {
  render() {
    return (
      <div>
        
        
        <div class="card heightis">
    <div class="bannercr">
      <img src={this.props.image}/>
    </div>
    <div class="menu">
      
    </div>
    <h2 class="name">{this.props.name}</h2>
    <div class="title">{this.props.post}</div>
    <div class="actions">
       
    </div>
   
</div>    

         
        </div>
      
    );
  }
}
export default Developer;