import React from 'react';
import ReactDOM from 'react-dom';

function Hijo(props) {
    return <button onClick={props.update}>Click</button>
}

class HijoPadre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    _update() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <React.Fragment>
                <Hijo update={this._update.bind(this)}/>
                <h1>{this.state.count}</h1>
            </React.Fragment>
        )
    }
}

export default HijoPadre;

/*
ReactDOM.render(
    <React.StrictMode>
        <Padre></Padre>
    </React.StrictMode>,
    document.getElementById('root')
);
*/
