import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;
  >label{
    display: flex;
    align-items: center;
    width: 100%;
    >span{
      white-space: nowrap;
    }
    > input{
      margin-left:16px ;
      display: block;
      height: 72px;
      width: 100%;
      border: none;
      background: none;
    }
  }
 
`
const NoteSection:React.FC =()=>{
    const [note,setNote]=useState("")
    const refInput = useRef<HTMLInputElement>(null)
    const x = ()=>{
        if (refInput.current!==null){
            console.log(refInput.current.value)
            setNote(refInput.current.value)
        }
    }
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注信息"
                       defaultValue={note}
                       ref={refInput}
                        onBlur={x}
                />
            </label>
        </Wrapper>
    )
}
export {NoteSection}