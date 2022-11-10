import React, { Component } from "react";

export class CmpDeClase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estado1: 'estado1'
    }
  }

  render() {
    console.log('DE CLASE', this.props)
    return (
      <>
        <h2>Esto es un componente de clase</h2>
        <p>Estado: {this.state.estado1}</p>
      </>
    )
  }
}

export const CmpFuncional = (props) => {
  console.log('FUNCIONAL', props)
  return (
    <h2>Esto es un componente funcional</h2>
  )
}