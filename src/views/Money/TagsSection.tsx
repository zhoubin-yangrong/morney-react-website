import styled from "styled-components";
import React, {useState} from "react";
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
const TagsSection: React.FC = ()=>{
    const [tag,setTag] = useState<string[]>(["衣","食","住","行","花","羊绒吃屎"])
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
            setSelected(selected.filter(t=>t!==tag))
        }else {
            setSelected([...selected,tag])
        }
    }
    const [selected,setSelected] = useState<string[]>([])
    return(
        <Wrapper>
            <ol>
                {tag.map(tag=>{
                    return <li key={tag} onClick={()=>{onToggleTags(tag)}} className={selected.indexOf(tag)>=0?"selected":""} >{tag}</li>
                })}
            </ol>
            <button onClick={()=>{onAddTag()}}>新增标签</button>
        </Wrapper>
    )
}

export {TagsSection}