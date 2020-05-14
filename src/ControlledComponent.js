import React, { Component } from 'react'

class ControlledComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Escriba Aqui"
    }
  }

  _updateInput = (ev) => {

    const value = ev.target.value;
    this.setState({value});

  }
  
  render() {
    return (
      <div>
        <label htmlFor="control">Control</label>
        <input type="text" id="control" value={this.state.value} onChange={this._updateInput}/>
      </div>
      )
  }
}

export default ControlledComponent;