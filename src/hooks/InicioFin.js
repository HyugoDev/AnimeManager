import { useState } from 'react'

const useInicioFin = (animes) => {
  const [Inicio, setInicio] = useState(0)
  const [Fin, setFin] = useState(10)

  const Incrementar = () => {
    if (Fin <= animes.length) {
      setInicio((i) => i + 10)
      setFin((f) => f + 10)
    }
  }

  const Decrementar = () => {
    if (Inicio !== 0) {
      setInicio((i) => i - 10)
      setFin((f) => f - 10)
    }
  }

  return { Inicio, Fin, Incrementar, Decrementar }
}

export default useInicioFin
