import React from 'react'
import './Horizontal.css'
import PropsRender from './PropsRender'
import EventComponent from './EventComponent'
import InitialStateComponent from './InitialStateComponent'
import UpdateStateComponent from './UpdateStateComponent'
import Padre1Component from './Padre1Component'
import Counter from './Counter'

//1
function Saludo(props){
  return (
    <span>>Hola {props.name}</span>
  );
}

//2
function Horizontal(props){

  return(
    <div className="Horizontal-content">
      <h1>ELEMENTOS HORIZONTALES</h1>
            {props.children}
    </div>

  );

}

//3

function Header(){
  return (
    <div className='Header'><h1>header</h1></div>
  );
}
function Content(){
  return (
    <div className='Content'><h1>content</h1></div>
  );
}
function Footer(){
  return (
    <div className='Footer'><h1>footer</h1></div>
  );
}


function App() {
  return (
    <React.StrictMode>

      <Saludo name='Juan'></Saludo>
      <Horizontal>
        <h1>primero</h1>
        <h1>segundo</h1>
      </Horizontal>
      <PropsRender header={Header} content={Content} footer={Footer}></PropsRender>
      <EventComponent/>
      <InitialStateComponent/>
      <UpdateStateComponent/>
      <h4>padre</h4>
      <Padre1Component/>
      <h4>padre</h4>
      <Counter/>

    </React.StrictMode>
  );
}

export default App;
