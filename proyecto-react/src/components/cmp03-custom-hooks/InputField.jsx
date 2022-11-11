import { useInputField } from "../../hooks/useInputField"

const InputField = (props) => {
  const {label, type, validations, initialValue, valueRef} = props
  const [value, setValue, errors] = useInputField(initialValue, validations)

  const listaErrores = errors?.map(err => <li key={err.id}>{err.msg}</li>)

  const handleChange = (e) => {
    valueRef.current = e.target.value
    setValue(e.target.value)
  }

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} onChange={handleChange} />
      {errors && <ul>{listaErrores}</ul>}
    </div>
  )
}

export default InputField