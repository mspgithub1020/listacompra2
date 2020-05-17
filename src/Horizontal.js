import React from 'react'

function HorizontalComponent(props){

    return(
      <div className="Horizontal-content">
        {props.children}
      </div>
  
    );
  
  }

function Horizontal(props){

    return(
      <HorizontalComponent>
        <h1>Primero</h1>
        <h1>Segundo</h1> 
        <h1>Tercero</h1>
      </HorizontalComponent>              
        
    );
  
}

export default Horizontal;