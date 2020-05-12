import React from 'react'


/*
State
    Update state: cree un componente que mantenga en su estado
    una propiedad bar y cuando se pulse un botón le sume 1.

*/

class UpdateStateComponent extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            bar : 0

        }

    }

    handleClick = () => {
        this.setState({

            bar : this.state.bar + 1

        })
    }

    render(){

        return (

            <React.Fragment>
                <button onClick={this.handleClick}>
                    PULSAR
                </button>
                <h3>{this.state.bar}</h3>
            </React.Fragment>
        )

    }

}

export default UpdateStateComponent;