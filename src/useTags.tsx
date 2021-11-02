import {useState} from "react";
const useTags = ()=>{   //自定义hooks函数(函数体包含react的内置接口--比如说useState)
    const [tag,setTag] = useState<string[]>(["衣","食","住","行"])
    return {tag,setTag}
}
export {useTags}
