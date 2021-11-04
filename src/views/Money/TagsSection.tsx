import styled from "styled-components";
import React  from "react";
import {useTags} from "../../hooks/useTags";

import {Button} from "../../components/Button";
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
    value:number[],
    onChange:(selected:number[])=> void
}
const TagsSection: React.FC<Props> = (props)=>{
    const{tag,AddTag}=useTags()
    // const [selectedTagIds,setSelected] = useState<string[]>([])
    const selectedTagIds = props.value

    const onToggleTags=(tagId:number)=>{
        const index:number = selectedTagIds.indexOf(tagId)
        if (index>=0){
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
        }else {
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass=(tagId:number)=>{
        return selectedTagIds.indexOf(tagId)>=0?"selected":""
    }
    return(
        <Wrapper>
            <ol>
                {tag.map(tag=>{
                    return <li key={tag.id} onClick={()=>{onToggleTags(tag.id)}} className={getClass(tag.id)} >{tag.name}</li>
                })}
            </ol>
            <Button onClick={()=>{AddTag()}}>新建标签</Button>
        </Wrapper>
    )
}

export {TagsSection}



