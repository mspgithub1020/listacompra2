import React from 'react';
 
function PropsRender (props) { 
    
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

export default PropsRender;