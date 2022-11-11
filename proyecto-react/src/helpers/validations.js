export const Validations = {
  minLength: (value, min) => {
    if (value.length < min) {
      return {
        id: 'minLength',
        msg: `Tiene que tener una longitud mínima de ${min}. Te faltan ${min - value.length} caracteres.`
      }
    }
    return null
  },
  withNumber: (value) => {
    if (/\d+/.test(value)) {
      return null
    }
    return {
      id: 'withNumber',
      msg: 'Tiene que tener al menos 1 número.'
    }
  },
  withMayus: (value) => {
    if (value.toLowerCase() === value) {
      return {
        id: 'withMayus',
        msg: 'Tiene que tener al menos 1 mayúscula.'
      }
    }
    return null
  },
  email: (value) => {
    if (!value.includes('@')) {
      return {
        id: 'email',
        msg: 'Tiene que tener un @.'
      }
    }
    return null
  },
}