import { useState } from 'react'

const useInicioFin = (total, tamaño) => {
  let cantidad = 0

  if (tamaño >= 1920) {
    cantidad = 21
  } else if (tamaño >= 1400) {
    cantidad = 20
  } else if (tamaño >= 1200) {
    cantidad = 20
  } else if (tamaño >= 992) {
    cantidad = 18
  } else if (tamaño >= 768) {
    cantidad = 16
  } else if (tamaño >= 576) {
    cantidad = 14
  } else if (tamaño < 576) {
    cantidad = 12
  }

  // if (total === undefined) {
  //   total = 0
  // }



  const [Fin, setFin] = useState(cantidad)
  const [Inicio, setInicio] = useState(0)



  const Incrementar = () => {
    if (Fin <= total.length - 1) {
      setInicio((i) => i + cantidad)
      setFin((f) => f + cantidad)
    }
  }

  const Decrementar = () => {
    if (Inicio !== 0) {
      setInicio((i) => i - cantidad)
      setFin((f) => f - cantidad)
    }
  }




  return { Inicio, Fin, Incrementar, Decrementar }

}

export default useInicioFin
