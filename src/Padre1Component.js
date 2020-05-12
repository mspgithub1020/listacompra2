import React from 'react'
import Hijo1Component from './Hijo1Component'


class Padre1Component extends React.Component{

    /**
     Comunicación
        Padre-Hijo: componente Padre que almacena en su estado una variable
        contador y se la pasa al componente Hijo para que la pinte (padre 
        pinta hijo e hijo pinta contador) 
     */

    constructor(props){

        super(props);

        this.state = {

            contador : 10

        }
    }    

    render(){

        return (

            <React.Fragment>

                <h1>Padre-Hijo</h1>
                <Hijo1Component contador={this.state.contador}/>

            </React.Fragment>

        )

    }

}

export default Padre1Component;