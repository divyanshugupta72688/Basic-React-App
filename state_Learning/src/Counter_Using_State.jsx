import { useState } from "react";

export default function Counter(){
    let[count,setCount] = useState(0);
    
    let incCount=()=>{
        // setCount(count+1);//asynchronous function hota hai..
        // setCount(count+1);// increase ek baar hii hoga chahe jitni baar bhi ye statment likh lu.
        // if u want execute upper lines then u have to call back.by following
        setCount((currvalue)=>{
            return currvalue+1;
        });
        setCount((currvalue)=>{
            return currvalue+1;
        });
        
    }
    return(
        <div>
        <h1>Count={count}</h1>
        
        <button onClick={incCount}>Increase Button!</button>
        </div>
    )
}