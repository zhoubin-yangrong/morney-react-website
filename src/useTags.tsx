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
    const findTag = (id:number)=> tag.filter(t=>t.id===id)[0]
    const findTagIndex=(id:number)=>{
        let result=-1 //保底值
        for (let i = 0; i <tag.length ; i++) {
            if (tag[i].id===id){
                result=i
                break
            }
        }
        return result
    }
    const updateTag = (id:number,obj:{name:string})=>{
        // setTag({})
        const index = findTagIndex(id)
        const cloneTag =JSON.parse(JSON.stringify(tag)  )
        cloneTag.slice(index,1,{id,obj})//!修改的拷贝后的自身参数
        setTag(cloneTag)
    }
    return {tag,setTag,findTag,updateTag,findTagIndex}
}
export {useTags}
