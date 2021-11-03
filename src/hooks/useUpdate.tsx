import {useEffect, useRef} from "react";


 const useUpdate=(fn:()=>void,deps:any)=>{
    let count=useRef(0)
    useEffect(()=>{
        count.current+=1
    })
    useEffect(()=>{
        if (count.current>1){
            console.log("更新吧")
            // fn()
        }
    },[deps]) //每次渲染执行的函数 不可变数据
}
export {useUpdate}
