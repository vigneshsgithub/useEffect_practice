import React from "react";
import { useState } from "react";
import { useEffect } from "react";




export default function ProgressBar({Timer}){
     const[RemainingTime,setReminingTime]=useState(Timer);

     useEffect(()=>{
        const Interval= setInterval(()=>{
           console.log("Interval")
           setReminingTime(prevTime => prevTime-10);
         },10);
         return(()=>{
           clearInterval(Interval);
         })
       },[])
     return(
        <>
          <progress value={RemainingTime} max={Timer}/>
          
        </>
     )
}