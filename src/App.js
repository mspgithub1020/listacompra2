import React from 'react'
import {BrowserRouter , Route , Switch, Link} from 'react-router-dom'

import './Horizontal.css'
import './App.css'

const ficheros = ['Home','Saludo','Horizontal','PropsRender','EventComponent','InitialStateComponent','UpdateStateComponent','Padre-Hijo','Hijo-Padre','Counter','RefsComponents','ControlledComponent','FetchComponent','CycleLIfeComponent'];


function App() {
  return (
    <React.StrictMode>

      <BrowserRouter>

        <div style={{display:'grid' , gridTemplateColumns:'auto 1fr' , gridColumnGap:'20px'}}>
          <nav>
            <ul>
              {ficheros.map((fichero,i)=>{
                  return(
                    <li key={i}>
                        <Link className="a" to={`/${fichero}`}>{fichero}</Link>
                    </li>
                  )
              })}              
            </ul>
          </nav>

          <main>
            <React.Suspense fallback={<div>Loading .... </div>}>
              <Switch>

                <Route exact path="/Home" component={React.lazy(()=>import('./Home'))}/>
                <Route path="/Saludo" component={React.lazy(()=>import('./Saludo'))}/>
                <Route path="/Horizontal" component={React.lazy(()=>import('./Horizontal'))}/>
                <Route path="/PropsRender" component={React.lazy(()=>import('./PropsRender'))}/>
                <Route path="/EventComponent" component={React.lazy(()=>import('./EventComponent'))}/>
                <Route path="/InitialStateComponent" component={React.lazy(()=>import('./InitialStateComponent'))}/>
                <Route path="/UpdateStateComponent" component={React.lazy(()=>import('./UpdateStateComponent'))}/>
                <Route path="/Padre-Hijo" component={React.lazy(()=>import('./Padre-Hijo'))}/>
                <Route path="/Hijo-Padre" component={React.lazy(()=>import('./Hijo-Padre'))}/>
                <Route path="/Counter" component={React.lazy(()=>import('./Counter'))}/>
                <Route path="/RefsComponents" component={React.lazy(()=>import('./RefsComponents'))}/>
                <Route path="/ControlledComponent" component={React.lazy(()=>import('./ControlledComponent'))}/>
                <Route path="/FetchComponent" component={React.lazy(()=>import('./FetchComponent'))}/>             
                

              </Switch>
            </React.Suspense>
          </main>

        </div>

      </BrowserRouter>
      
    </React.StrictMode>
  );
}

export default App;


/*

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

*/

/*
<li>            
    <Link to={{pathname:"/Saludo" , props:{name:"Juan"}}}>Saludo</Link>            
</li>

*/