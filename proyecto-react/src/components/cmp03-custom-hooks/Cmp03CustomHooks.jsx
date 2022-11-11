import { useRef } from "react"
import InputField from "./InputField"

const Cmp03CustomHooks = () => {
  // const [email, setEmail, emailErrors] = useInputField('', {email: true})
  // const [password, setPassword, passwordErrors] = useInputField('', {withMayus: true, withNumber: true, minLength: 5})
  // const [password, setPassword] = useState('')
  // const [emailErrors, setEmailErrors] = useState([])
  // const [passwordErrors, setPasswordErrors] = useState([])

  // useEffect(() => {
  //   // valida el campo del email
  // }, [email])

  // useEffect(() => {
  //   // valida el campo de la contraseña
  // }, [password])

  // const listaErroresEmail = emailErrors?.map(err => <li key={err.id}>{err.msg}</li>)
  // const listaErroresPassword = passwordErrors?.map(err => <li key={err.id}>{err.msg}</li>)

  const email = useRef('')
  const password = useRef('')

  const login = (e) => {
    e.preventDefault()
    console.log({email: email.current, password: password.current})
  }

  return (
    <div>
      <h2>Custom Hooks</h2>

      <form onSubmit={login}>
        {/* <div>
          <label htmlFor="email">Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailErrors && <ul>{listaErroresEmail}</ul>}
        </div> */}
        {/* <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordErrors && <ul>{listaErroresPassword}</ul>}
        </div> */}
        <InputField label="Email" type="text" initialValue="" validations={{email: true}} valueRef={email} />
        <InputField label="Password" type="password" initialValue="" validations={{withMayus: true, withNumber: true, minLength: 5}} valueRef={password} />

        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Cmp03CustomHooks