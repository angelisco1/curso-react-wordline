import { CARGAR_PRODUCTOS, SACAR_PRODUCTO } from "./actions.types";

const initialState = {
  productos: [],
  infoMaquina: {
    dineroRecaudado: 0,
    maquinaCargada: false
  }
}

const maquinaExpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_PRODUCTOS:
      return {
        productos: action.payload,
        infoMaquina: {
          dineroRecaudado: 0,
          maquinaCargada: true
        }
      };
    case SACAR_PRODUCTO:
      let precio = null
      const productosActualizados = state.productos.map(p => {
        if (p.codigo === action.payload) {
          precio = p.precio
          return { ...p, stock: p.stock - 1 }
        }
        return { ...p }
      })
      const newState = {
        productos: productosActualizados,
        infoMaquina: {
          dineroRecaudado: state.infoMaquina.dineroRecaudado + precio,
          maquinaCargada: true
        }
      };

      console.log({ newState })

      return newState
    default:
      return state;
  }
}

export default maquinaExpReducer