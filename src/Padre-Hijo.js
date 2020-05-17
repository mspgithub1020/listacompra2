import React from 'react';
import ReactDOM from 'react-dom';

function Hijo(props) {
    return <h1>{props.count}</h1>
}

class PadreHijo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    render() {
        
        return <Hijo count={this.state.count} />
            
    }
}

export default PadreHijo;

/*
ReactDOM.render(
    <React.StrictMode>
        <Padre></Padre>
    </React.StrictMode>,
    document.getElementById('root')
);
*/