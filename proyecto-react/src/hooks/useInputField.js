import { useEffect, useState } from 'react'
import { Validations } from '../helpers/validations'


export const useInputField = (initialValue, validaciones) => {
  const [value, setValue] = useState(initialValue)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    const mensajesError = []

    Object.entries(validaciones).forEach(entry => {
      const [validation, validationOption] = entry
      const error = Validations[validation](value, validationOption)
      if (error) {
        mensajesError.push(error)
      }
    })

    setErrors(mensajesError.length > 0 ? mensajesError : null)
  }, [value])

  return [value, setValue, errors]
}

// {
//   email: true
// }

// {
//   minLength: 5,
//   withMayus: true,
//   withNumbers: true
// }

// [['minLength', 5], [withMayus, true]]