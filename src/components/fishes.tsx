import {FC} from 'react'
import useStore from '../store'

export const Fishes:FC=()=>{
  const fishes=useStore((state)=>state.fishes)
  const incrementFishes=useStore((state)=>state.incrementFishes)
  const resetFishes=useStore((state)=>state.resetFishes)
  return(
    <>
      <h5>Fishes Number:{fishes}</h5>
      <button onClick={incrementFishes}>Fishes Number +1</button>
      <button onClick={resetFishes}> Reset Fishes Number </button>
    </>
  )
}