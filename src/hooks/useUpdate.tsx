import {useEffect, useRef} from "react";
export const useUpdate=(fn:()=>void,deps:any[])=>{
    const count=useRef(0)
    useEffect(()=>{
        const start = count.current+=1
        if (start>0){
            fn()
        }
    },deps) //每次渲染执行的函数
}
