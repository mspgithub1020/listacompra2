import React from 'react'


/*
State
    Initial state: cree un componente que mantenga en su estado una
    propiedad foo con valor inicial Hello World y lo pinte.
*/

class InitialStateComponent extends React.Component{


    constructor(props){

        super(props);

        this.state = {

            foo : 'Hello World'

        }

    }

    render(){

        return (

            <div><h3>{this.state.foo}</h3></div>

        )

    }

}

export default InitialStateComponent;