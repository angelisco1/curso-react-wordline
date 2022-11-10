import { useContext } from "react"
import { idiomaCtx } from "../../contexts/idioma.ctx"

const Cmp2 = () => {
  const {traducir, idioma} = useContext(idiomaCtx)

  return (
    <div>
      <p>{traducir('hola', idioma)} Charly</p>
    </div>
  )
}

export default Cmp2