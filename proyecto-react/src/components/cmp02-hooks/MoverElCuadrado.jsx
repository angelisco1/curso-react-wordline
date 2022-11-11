import { useEffect, useReducer } from "react"

const styles = {
  position: 'absolute',
  border: '1px solid black',
  width: '50px',
  height: '50px',
  backgroundColor: 'black'
}

const changeCuadradoReducer = (state, action) => {
  const tecla = action.type
  switch(tecla) {
    case 'ArrowUp':
      return {...state, y: state.y - 5}
    case 'ArrowDown':
      return {...state, y: state.y + 5}
    case 'ArrowLeft':
      return {...state, x: state.x - 5}
    case 'ArrowRight':
      return {...state, x: state.x + 5}
    default:
      return state
  }
}

const MoverElCuadrado = () => {
  const [state, dispatch] = useReducer(changeCuadradoReducer, {x: 0, y: 0})
  console.log(state)

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      console.log(e)
      dispatch({type: e.code})
    })
  }, [])

  return (
    <div>
      <div style={{...styles, left: state.x + 'px', top: state.y + 'px'}}></div>
    </div>
  )
}

export default MoverElCuadrado