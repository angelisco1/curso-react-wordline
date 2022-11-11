import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from './contador'
import maquinaExpReducer from './maquina-expendedora'

const configStore = () => {
  return configureStore({
    reducer: {
      contadorReducer,
      maquinaExpReducer,
    }
  })
}

export default configStore