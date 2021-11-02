import styled from "styled-components";
import React from "react";
import {useTags} from "../../useTags";
const Wrapper = styled.section`
  background: #FFFFFF;padding: 0 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  > ol{display: flex;margin: 0 -12px 17px;flex-wrap: wrap;
    > li{
      &.selected{
        background-color: skyblue;
      }
      padding: 4px 17px;margin: 5px 12px;background: #D9D9D9;border-radius: 18px;font-size: 14px;
    }
  }
  > button{
    font-style: normal;font-weight: normal;font-size: 14px;line-height: 22px;/* identical to box height, or 157% */background: #FFFFFF;border: none;
    border-bottom: 1px solid #333;padding: 0 2px;margin-bottom: 12px;
  }
`
type Props ={
    value:string[],
    onChange:(selected:string[])=> void
}
const TagsSection: React.FC<Props> = (props)=>{
    const{tag,setTag}=useTags()
    // const [selected,setSelected] = useState<string[]>([])
    const selected = props.value
    const onAddTag =()=>{
        const tagName =window.prompt("新增标签")
        if (tagName!==null){
            setTag([...tag,tagName])
        }else {
            alert("玩呢?")
        }
    }
    const onToggleTags=(tag:string)=>{
        const index:number = selected.indexOf(tag)
        if (index>=0){
            props.onChange(selected.filter(t=>t!==tag))
        }else {
            props.onChange([...selected,tag])
        }
    }
    const getClass=(tag:string)=>{
        return selected.indexOf(tag)>=0?"selected":""
    }
    return(
        <Wrapper>
            <ol>
                {tag.map(tag=>{
                    return <li key={tag} onClick={()=>{onToggleTags(tag)}} className={getClass(tag)} >{tag}</li>
                })}
            </ol>
            <button onClick={()=>{onAddTag()}}>新增标签</button>
        </Wrapper>
    )
}

export {TagsSection}