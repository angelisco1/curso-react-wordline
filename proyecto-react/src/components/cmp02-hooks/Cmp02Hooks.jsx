import { Component, useState } from 'react'
import { idiomaCtx } from "../../contexts/idioma.ctx"
import { traducir } from '../../helpers/traductor'
import BuscadorCocktails from './BuscadorCocktails'
import Cmp1 from './Cmp1'
import VideoPlayer from './VideoPlayer'

const Cmp02Hooks = () => {
  const [cuenta, setCuenta] = useState(8)
  const [idioma, setIdioma] = useState('es')
  // const [credenciales, setCredenciales] = useState({username: '', password: ''})
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const objIdiomaCtx = {
    idioma,
    traducir
  }

  return (
    <div>
      <h2>React Hooks</h2>
      <div>
        <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button>
        <span>{cuenta}</span>
        <button type="button" onClick={() => setCuenta(cuenta + 1)}>+</button>
      </div>
      {/* <hr />
      <Contador /> */}
      <VideoPlayer />
      <BuscadorCocktails />

      <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <idiomaCtx.Provider value={objIdiomaCtx}>
        <Cmp1 />
      </idiomaCtx.Provider>

    </div>
  )
}

export default Cmp02Hooks


/** PROBLEMA DEL THIS EN COMPONENTES DE CLASES */
class Contador extends Component {
  constructor() {
    super()
    this.state = {
      cuenta: 4
    }
    this.incrementar = this.incrementar.bind(this)
    this.decrementar = this.decrementar.bind(this)
  }

  incrementar() {
    console.log('FN1', this)
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  decrementar() {
    console.log('FN2', this)
    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }

  fn() {
    console.log('THIS', this)
  }

  render() {
    this.fn()
    console.log('RENDER', this)
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>{this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}