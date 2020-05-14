import React from 'react'

class FetchComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            data: []

        }

    }

    componentDidMount(){

        this._getAllFetch();        

    }

    async _getAllFetch() {
        const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?character=Homer%20Simpson');
        const data = await response.json();
        this.setState({data})
    }
    

    render() {
        return (
            
            <ul>
                {this.state.data.map((item) => {
                    return <li key={item.quote} >{item.quote}</li>
                })}
            </ul>
            
        );
    }
    
}

export default FetchComponent; 