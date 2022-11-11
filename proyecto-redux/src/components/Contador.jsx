import { useDispatch, useSelector } from "react-redux"
import { createIncrementarAction, createSetCuentaAction } from '../store/contador/actions'

const Contador = () => {
  const dispatch = useDispatch()
  const cuenta = useSelector(state => {
    console.log(state)
    return state.contadorReducer.cuenta
  })

  const handleClick = () => {
    const actionIncrementar = createIncrementarAction()
    dispatch(actionIncrementar)
  }

  const handleChange = (e) => {
    const nuevaCuenta = Number(e.target.value)
    const actionSetCuenta = createSetCuentaAction(nuevaCuenta)
    dispatch(actionSetCuenta)
  }

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button type="button" onClick={handleClick}>+1</button>
      <input type="number" onChange={handleChange} />
    </div>
  )
}

export default Contador