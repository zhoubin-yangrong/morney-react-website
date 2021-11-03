import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Input";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 12px 16px;
  display: flex;
  align-items: center;
 /* >label{
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
  }*/
 
`
type Props = {
    value:string,
    onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> =(props)=>{
    // const [note,setNote]=useState("")
    const note = props.value
    // const refInput = useRef<HTMLInputElement>(null)
    const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
        props.onChange(e.target.value)
       /* if (refInput.current!==null){
            console.log(refInput.current.value)
            props.onChange(refInput.current.value)
        }*/
    }
    return(
        <Wrapper>
            <Input label="备注" type="text" placeholder="在这里添加备注信息"
                   value={note}
                   onChange={onChange}/>
            {/*函数组件不支持ref={refInput}写法*/}
        </Wrapper>
    )
}
export {NoteSection}