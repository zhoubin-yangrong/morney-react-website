import {useState} from "react";
const useTags = ()=>{   //自定义hooks函数(函数体包含react的内置接口--比如说useState)
    const [tag,setTag] = useState<{id:number,name:string}[]>([
        {id:1,name:"衣"},
        {id:2,name:"食"},
        {id:3,name:"住"},
        {id:4,name:"行"},
    ])
    return {tag,setTag}
}
export {useTags}
