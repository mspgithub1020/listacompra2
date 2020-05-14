import React from 'react'

/*
    Refs: cree un componente con tres inputs, utilizando una ref de React
    mande el focus al primer input la primera vez que se pinte el componente.

*/

class RefsComponents extends React.Component{

    constructor(props){

        super(props);
        this.textInput = React.createRef();
        
    }    

   componentDidMount() {

    this.textInput.current.focus();

  }

    render(){

        return (
            <div>
                <p><input type="text" ref={this.textInput}/></p>
                <p><input type="text"/></p>
                <p><input type="text"/></p>
            </div>
        );
    }
} 

export default RefsComponents;