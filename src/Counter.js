import React from 'react'
import Displayer from './Displayer'
import Updater from './Updater'

class Counter extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            contador : 100
        }
    }

    _update = ()=>{
        this.setState({
            contador : this.state.contador + 1
        })
    }

    render(){
        return (
            <React.Fragment>                
                <Updater update={this._update}/>
                <Displayer contador={this.state.contador}/>
            </React.Fragment>
        )
    }
}

export default Counter;