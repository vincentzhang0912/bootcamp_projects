import{FC} from 'react'
import useStore from '../store/index'


export const Father:FC=()=>{
  //调用 us额Store，同时提供一个选择数据的选择器
  //state =>要访问的数量

  const bears=useStore((state)=>state.bears)
  return (
    <>
      <h3>Father component</h3>
      <p>The number of bears:{bears}</p>
      <hr />
      <Son1/>
      <hr />
      <Son2/>
      
    </>
  )
}
const Son1:FC=()=>{
  const incrementBears=useStore(state=>state.incrementBears)
  const decrementBearsByStep=useStore(state=>state.decrementBearsByStep)
  const asyncIncrementBears=useStore(state=>state.asyncIncrementBears)
  return(
    <>
      <h5>Son1 Component</h5>
      <button onClick={incrementBears}>bears + 1</button>
      <button onClick={()=>decrementBearsByStep(5) }>bears - 5</button>
      <button onClick={asyncIncrementBears}>bears increment +1 after one second</button>
    </>
  )
}

const Son2:FC=()=>{
  const reset=useStore(state=>state.reset)
  return(
    <>
      <h5>Son2 Component</h5>
      <button onClick={reset}>bears reset</button>
    </>
  )
}

