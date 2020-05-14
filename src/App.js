import React from 'react'
import './Horizontal.css'
import PropsRender from './PropsRender'
import EventComponent from './EventComponent'
import InitialStateComponent from './InitialStateComponent'
import UpdateStateComponent from './UpdateStateComponent'
import Padre1Component from './Padre1Component'
import Counter from './Counter'
import HijoPadre from './Hijo-Padre'
import PadreHIjo from './Padre-Hijo'
import RefsComponents from './RefsComponents'
import ControlledComponent from './ControlledComponent'
import FetchComponent from './FetchComponent'

//import CycleLifeComponent from './CycleLifeComponent'


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

      <Saludo name='Juan' />
      <Horizontal>
        <h1>primero</h1>
        <h1>segundo</h1>
      </Horizontal>
      <PropsRender header={Header} content={Content} footer={Footer}></PropsRender>
      <EventComponent/>
      <InitialStateComponent/>
      <UpdateStateComponent/>      
      <Padre1Component/> 
      <h5>Hijo-Padre</h5>     
      <HijoPadre/>
      <h5>Padre-Hijo</h5>
      <PadreHIjo/>
      <h5>Mediator</h5>
      <Counter/>
      <h5>REFS COMPONENT</h5>

      <RefsComponents/>
      
      <h5>CONTROLLED COMPONENT</h5>

      <ControlledComponent/>

      <h5>FETCH</h5>

      <FetchComponent/>

    </React.StrictMode>
  );
}

export default App;
