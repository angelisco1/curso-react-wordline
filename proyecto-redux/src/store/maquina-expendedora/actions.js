import { CARGAR_PRODUCTOS, SACAR_PRODUCTO } from "./actions.types";

export const createCargarProductosAction = (productos) => {
  return {
    type: CARGAR_PRODUCTOS,
    payload: productos
  }
}

export const createSacarProductoAction = (codigo) => {
  return {
    type: SACAR_PRODUCTO,
    payload: codigo
  }
}