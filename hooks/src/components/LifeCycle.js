import React from 'react'
import { useEffect,useState } from 'react';

console.log("login-render");
export const LifeCycle = () => {
    console.log("return-render");
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //Case 1 sin dependencias
    useEffect(() => {console.log("useEffects sin dependencias")})
    
    //Case 2 [counter2]
    useEffect(() => {console.log("useEffects [counter2]")
                    return()=>{
                        console.log("Clean useEffects []")
                    }},[])

    //Case 3 [counter1,counter2]
    useEffect(() => {console.log("useEffects [counter1,counter2]")}, [counter1,counter2])
    
    return (
        <div>
            <h1>Life Cycle</h1>
            <h3>Clicks counter1: {counter1}</h3>
            <h3>Clicks counter2: {counter2}</h3>
            <button onClick={()=>setCounter1(counter1+1)}>Incrementar counter1</button>
            <button onClick={()=>setCounter2(counter2+1)}>Incrementar counter2</button>
        </div>
    )   
}
