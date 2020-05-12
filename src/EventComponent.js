import React from 'react';
 
class EventComponent extends React.Component { 
    
    handleClick = () => {
        alert('click');
      }
    
    render(){ 
        return(
            
            <button onClick={this.handleClick}>
                PULSAR
            </button>
            
        )
    }
}

export default EventComponent;