import React from "react";
import styled from "styled-components";
const Label = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    >span{
      white-space: nowrap;
    }
    > input{
      margin-left:16px ;
      display: block;
      height: 44px;
      width: 100%;
      border: none;
      background: none;
  }
`
type Props = {
    label:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> = (props)=>{
    const {label,children,...reset}=props //抽离部分参数其余的自动拷属性参数到...reset中
    return(
        <Label>
            <span>{label}</span>
            <input {...reset}/>
        </Label>
    )
}
export {Input}

