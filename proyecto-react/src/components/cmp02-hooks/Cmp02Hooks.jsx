import { Component, useMemo, useState } from 'react'
import { idiomaCtx } from "../../contexts/idioma.ctx"
import { traducir } from '../../helpers/traductor'
import BuscadorCocktails from './BuscadorCocktails'
import Cmp1 from './Cmp1'
import MoverElCuadrado from './MoverElCuadrado'
import VideoPlayer from './VideoPlayer'

const Cmp02Hooks = () => {
  const [cuenta, setCuenta] = useState(8)
  const [idioma, setIdioma] = useState('es')
  const [nombre, setNombre] = useState('Charly')
  const [apellido, setApellido] = useState('Falco')
  // const [credenciales, setCredenciales] = useState({username: '', password: ''})
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const getNombreCompleto = () => {
  //   console.log('Calcula el nombre completo...')
  //   return `${apellido}, ${nombre}`
  // }
  // const nombreCompleto = getNombreCompleto()
  const nombreCompleto = useMemo(() => {
    console.log('Calcula el nombre completo...')
    return `${apellido}, ${nombre}`
  }, [nombre, apellido])

  const objIdiomaCtx = {
    idioma,
    traducir
  }

  return (
    <div>
      <h2>React Hooks</h2>

      <h3>useMemo</h3>
      {/* <p>{nombre} {apellido}</p> */}
      <p>{nombreCompleto}</p>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />


      <h3>useReducer</h3>
      <MoverElCuadrado />


      <h3>useState</h3>
      <div>
        <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button>
        <span>{cuenta}</span>
        <button type="button" onClick={() => setCuenta(cuenta + 1)}>+</button>
      </div>
      {/* <hr />
      <Contador /> */}

      <h3>useRef</h3>
      <VideoPlayer />

      <h3>useEffect y useCallback</h3>
      <BuscadorCocktails />

      <h3>useContext</h3>
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