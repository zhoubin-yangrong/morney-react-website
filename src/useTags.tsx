import {useEffect, useState} from "react";
import {createId} from "./lib/createId";
import {useUpdate} from "./hooks/useUpdate";

const useTags = ()=>{   //自定义hooks函数(函数体包含react的内置接口--比如说useState)
    const [tag,setTag] = useState<{id:number,name:string}[]>([])
    useEffect(()=>{
        console.log("after mount");
        let localTags =JSON.parse(window.localStorage.getItem("tags") || "[]")
        if (localTags.length===0){//初始数据持久化
            localTags=[
                {id:createId(),name:"衣"},
                {id:createId(),name:"食"},
                {id:createId(),name:"住"},
                {id:createId(),name:"行"},
            ]
        }
        setTag(localTags)
    },[])
    useUpdate(()=>{
        window.localStorage.setItem("tags",JSON.stringify(tag))
    },[tag])
    // useEffect(()=>{
    //     // 重复两遍的操作   解决这个问题用自封装执行函数
    //     console.log("tag changed");
    //     debugger
    //     window.localStorage.setItem("tags",JSON.stringify(tag))
    //     console.log("set tags");
    //
    // },[tag])
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
        // 简写 map特性
        setTag(tag.map(t=>t.id === id ? {id: id, name: obj.name} : t))
       /* const index = findTagIndex(id)
        const cloneTag =JSON.parse(JSON.stringify(tag)  )
        cloneTag.splice(index,1,{id,obj})//!修改的拷贝后的自身参数
        setTag(cloneTag)*/
    }
    const deleteTag = (id:number)=>{
        // 简写 筛选器特性
        setTag(tag.filter(t=>t.id!==id))
        /*const index = findTagIndex(id)
        const cloneTag =JSON.parse(JSON.stringify(tag)  )
        cloneTag.splice(index,1)//!修改的拷贝后的自身参数
        setTag(cloneTag)*/
    }
    const addTag =()=>{
        const tagName =window.prompt("新增标签")
        if (tagName!==null && tagName!==""){
            setTag([...tag, {id:createId(),name:tagName}])
        }else {
            alert("玩呢?")
        }
    }
    return {tag,setTag,findTag,updateTag,findTagIndex,deleteTag,AddTag: addTag}
}
export {useTags}
