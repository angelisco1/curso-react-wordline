import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createCargarProductosAction, createSacarProductoAction } from '../store/maquina-expendedora/actions'

const MaquinaExp = () => {
  const [codigo, setCodigo] = useState(0)
  const dispatch = useDispatch()
  const {productos, infoMaquina} = useSelector(state => {
    return state.maquinaExpReducer
  })

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then(resp => resp.json())
      .then(data => {
        const cargarProductosAction = createCargarProductosAction(data)

        setTimeout(() => {
          dispatch(cargarProductosAction)
        }, 2000)

      })
  }, [])

  const handleClick = () => {
    const sacarProductoAction = createSacarProductoAction(Number(codigo))
    dispatch(sacarProductoAction)
  }

  return (
    <div>
      {!infoMaquina.maquinaCargada && <p>Cargando máquina...</p>}
      {infoMaquina.maquinaCargada && <>
        <div>
          <p>Dinero recaudado: {infoMaquina.dineroRecaudado}€</p>
        </div>
        <div>
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
          <button type="button" onClick={handleClick}>Sacar producto</button>
        </div>
        <div>
          {
            productos.map(p => (
              <div key={p.id}>
                <p>{p.nombre} (Cod: {p.codigo})</p>
                <p>Precio: {p.precio}€</p>
                <p>Quedan {p.stock}</p>
              </div>
            ))
          }
        </div>
      </>}
    </div>
  )
}

export default MaquinaExp