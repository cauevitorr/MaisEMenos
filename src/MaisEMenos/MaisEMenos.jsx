import React from "react"
import './Css.css'
const MaisEMenos = () => {

 const [contador, setContador] = React.useState(0)
 function Acrecimo() {
  setContador(contador + 1)
 }
 return (
  <>
    <button onClick={() => setContador(contador - 1)}>-</button>
    <span>{contador}</span>
    <button onClick={Acrecimo}>+</button>
  </>  
 )
}


export default MaisEMenos
