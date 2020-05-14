import React from 'react'

export default class CycleLifeComponent extends React.Component {
  constructor(...args) {
    console.log('Ejecuto constructor', ...args)
    super(...args)
    this.state = {
      estado: 'Inicializado en el constructor'
    }
  }

  componentWillMount() {
    console.log('Se ejecuta componentWillMount')
  }

  componentDidMount() {
    console.log('Se ejecuta componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)    
  }

  componentWillUnmount() {
    console.log('Se desmonta el componente...')
  }

  render() {
    return (
      <div>
        <p>Componente del ciclo de vida</p>
        <p>Estado: {this.state.estado}</p>
        <p>Propiedad: {this.props.propiedad}</p>
      </div>
    )
  }
}


/*
CicloVida.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}
Solo con que uses este componente tal cual podrás ver ya cómo se ejecutan los métodos del ciclo de vida relacionados con la parte del "primer renderizado" (mira la imagen anterior de este artículo).

Si quisieras poner en marcha otros métodos del ciclo de vida necesitarías hacer cosas como cambiar el estado del componente o sus propiedades. Como referencia te dejamos este otro código, en el que usamos el componente de CicloVida y cambiamos de manera dinámica una de sus propiedades.

import React from 'react'
import CicloVida from './index'

export default class UsarCicloVida extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      valorPropiedad: 'Test de valor de propiedad'
    }
  }

  cambiarPropiedad() {
    this.setState({
      valorPropiedad: 'Otro valor'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.cambiarPropiedad.bind(this)}>Cambiar propiedad</button>
        <CicloVida propiedad={this.state.valorPropiedad} />
      </div>
    )
  }
}



 
*/