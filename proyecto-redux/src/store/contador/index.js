import { INCREMENTAR, SET_CUENTA } from "./actions.types";

const initialState = { cuenta: 0 }

const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return { cuenta: state.cuenta + 1 }
    case SET_CUENTA:
      return { cuenta: action.payload }
    default:
      return state;
  }
}

export default contadorReducer