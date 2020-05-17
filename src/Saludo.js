import React from 'react'

function SaludoComponent(props){
    return (
      <span>Hola {props.name}</span>
    );
  }

function Saludo(props){

  return (
  
    <div className="Saludo-div">
      <SaludoComponent name='Juan'/>
    </div>

  )

}

export default Saludo;