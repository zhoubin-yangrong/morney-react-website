import {useState} from "react";
import {createId} from "./lib/createId";
const defaultTags=[
    {id:createId(),name:"衣"},
    {id:createId(),name:"食"},
    {id:createId(),name:"住"},
    {id:createId(),name:"行"},
]//为了去除路由跳转回来id变换的bug   抽离出来
const useTags = ()=>{   //自定义hooks函数(函数体包含react的内置接口--比如说useState)
    const [tag,setTag] = useState<{id:number,name:string}[]>(defaultTags)
    return {tag,setTag}
}
export {useTags}
