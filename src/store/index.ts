//1.create function by required
import {create} from 'zustand'
//2.create hook for store
const useStore=create<BearType>() ((set,get)=>{
  //This return objects stores globally shared data or methods
  return{
    //the number of bear
    bears:0,
    // incrementBears:()=>set({bears:9}) //set function update store
    incrementBears:()=>set((prevState)=>({bears:prevState.bears+1})),
    //reset bears number
    reset:()=>set({bears:0}),
    //decrement bears number by step
    decrementBearsByStep:(step=1)=>set((prevState)=>({bears:prevState.bears-step})),
    asyncIncrementBears:()=>{
      setTimeout(()=>{
        get().incrementBears()
      },1000)
    },
    //fishes number
    fishes:0,
    incrementFishes:()=>set((prevState)=>({fishes:prevState.fishes+1})),
    resetFishes:()=>set({fishes:0})
  }
})
//3.export hook in store

export default useStore

