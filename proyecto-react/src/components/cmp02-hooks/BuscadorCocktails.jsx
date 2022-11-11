import { useCallback, useEffect, useState } from 'react'

const BuscadorCocktails = () => {
  const [nombre, setNombre] = useState('margarita')
  const [cocktails, setCocktails] = useState([])
  const [cocktailId, setCocktailId] = useState(null)
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

  useEffect(() => {
    // console.log('PASA POR EL USEEFFECT')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCocktails(data.drinks || [])
      })
  }, [nombre])

  const getCocktailById = useCallback(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          const [drink] = data.drinks
          setCocktailSeleccionado(drink)
        })
  }, [cocktailId])

  useEffect(() => {
    // console.log('PASA POR EL USEEFFECT ID')
    if (cocktailId) {
      // console.log('PASA POR EL USEEFFECT ID - IF')
      // fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      //   .then(resp => resp.json())
      //   .then(data => {
      //     console.log(data)
      //     const [drink] = data.drinks
      //     setCocktailSeleccionado(drink)
      //   })
      getCocktailById()
    }
  }, [cocktailId])

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('DENTRO INTERVAL', intervalId)
    }, 3000)

    return () => {
      console.log('DENTRO RETURN', intervalId)
      clearInterval(intervalId)
    }
  }, [nombre])

  const listaCocktails = cocktails.map(cocktail => (
    <li
      key={cocktail.idDrink}
      onClick={() => setCocktailId(cocktail.idDrink)}
    >
      {cocktail.strDrink}
    </li>
  ))
  console.log('RENDER')

  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <h3>Lista cocktails</h3>

      <ul>
        {listaCocktails}
      </ul>

      {cocktailSeleccionado && <img width="200" src={cocktailSeleccionado.strDrinkThumb} alt={`Imagen de ${cocktailSeleccionado.strDrink}`} />}
    </div>
  )
}

export default BuscadorCocktails