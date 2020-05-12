import React from 'react';
import ReactDOM from 'react-dom';

function Hijo(props) {
    return <h1>{props.count}</h1>
}

class Padre extends React.Component {
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
                <button onClick={() => this._update()}>Click</button>
                <Hijo count={this.state.count} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Padre></Padre>
    </React.StrictMode>,
    document.getElementById('root')
);
