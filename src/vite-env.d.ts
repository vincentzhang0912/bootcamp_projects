/// <reference types="vite/client" />


type BearType={
bears:numbers
incrementBears:()=>void//no parameter, no return value
reset:()=>void
decrementBearsByStep:(step?:number)=>void
asyncIncrementBears:()=>void

fishes:number
incrementFishes:()=>void
resetFishes:()=>void

}

