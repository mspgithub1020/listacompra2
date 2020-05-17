import React from 'react'

function Updater(props){ 

    return(
        <div>
            <button onClick={props.update}><h4>CHANGE COUNTER</h4></button>
        </div>
    );   
}

export default Updater;