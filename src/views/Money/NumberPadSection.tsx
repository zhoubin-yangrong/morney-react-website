import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  > .output{
    font-size: 36px;
    line-height: 72px;
    color: #333333;
    text-align: right;
    padding: 0 16px;
    background: #FFFFFF;
    box-shadow: inset 0 5px 5px -5px rgba(0,0,0,0.25),
                inset 0 -5px 5px -5px rgba(0,0,0,0.25)
  ;
  }
  > .pad{
    //display: flex;
    //flex-flow: wrap;
    //border:1px solid red
    > button{
      width: 25%;
      font-size:18px;
      height: 64px;
      float: left;
      border: none;
      &.zero{
        width: 50%;
      }
      &.ok{
        height: 128px;
        float:right;
      }
      &:nth-child(1){
        background-color: #F2F2F2;
      }
      &:nth-child(2),:nth-child(5){
        background-color: #E0E0E0;
      }
      &:nth-child(3),:nth-child(6),:nth-child(9){
        background-color: #D3D3D3;
      }
      &:nth-child(4),:nth-child(7),:nth-child(10),:nth-child(13){
        background-color: #C1C1C1;
      }
      &:nth-child(8),:nth-child(11){
        background-color: #B8B8B8;
      }
      &:nth-child(12){
        background-color: #8B8B8B;
      }
      &:nth-child(14){
        background-color: #D3D3D3;
      }
      
    }
    
  }
`
const NumberPadSection:React.FC = ()=>{
    const [outNumber,setOutNumber] = useState("0")
    const onButtonWrapper = (e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
        if (text===null)return
        switch (text){
            case "0":
            case "1":
            case "2":
            case "3":
                 case "4":
            case "5":
            case "6":
            case "7":
            case "8":
                 case "9":
            case ".":
                if (outNumber==="0"){
                    setOutNumber(text)
                    }else {
                    setOutNumber(`${outNumber}${text}`)
                }
                break
            case "删除":
                console.log("删除")
                break
            case "清空":
                console.log("清空")
                break
            case "ok":
                console.log("确认")
                break
        }
    }
    return(
        <Wrapper>
            <div className="output">
                {outNumber}
            </div>
            <div className="pad clearfix" onClick={onButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button className="point">.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}