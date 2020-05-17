import React from 'react';


function Header(){
    return (
      <div className='Header'><h1>Header</h1></div>
    );
  }
function Content(){
    return (
      <div className='Content'><h1>Content</h1></div>
    );
  }
function Footer(){
    return (
      <div className='Footer'><h1>Footer</h1></div>
    );
  }
 
function PropsRenderComponent (props) { 
    
    return(
        <div>
            <div>
                {props.header()}
            </div>
            <div>
                {props.content()}
            </div>
            <div>
                {props.footer()}
            </div>
        </div>
    )
}

function PropsRender (props) { 
    
    return (
      <div className="PropsRender-div">
         <PropsRenderComponent header={Header} content={Content} footer={Footer} ></PropsRenderComponent>
      </div>
    )
}

export default PropsRender;