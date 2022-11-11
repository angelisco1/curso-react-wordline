import { INCREMENTAR, SET_CUENTA } from "./actions.types"

// ACTION CREATORS

export const createIncrementarAction = () => {
  return {
    type: INCREMENTAR
  }
}

export const createSetCuentaAction = (nuevaCuenta) => {
  return {
    type: SET_CUENTA,
    payload: nuevaCuenta
  }
}