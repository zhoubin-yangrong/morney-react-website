import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  background: #C4C4C4;
  > ul{
    display: flex;
    > li{
      flex: 1;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: normal;
      padding: 18px 0;
      position: relative;
      //伪元素搭建下划线展示
      &.select:after{
        content: "";
        display: block;
        height: 3px;
        background-color: #000;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`
const CategorySection:React.FC= ()=>{
    const [category,setCategory]=useState("-")
    const x =(type:string)=>{
        setCategory(type)
    }
    const categoryMap ={"-":"支出","+":"收入"}
    const [categoryList]=useState<("-"|"+")[]>(["-","+"])
    return(
        <Wrapper>
            <ul>
                {categoryList.map(l=>{
                    return  <li key={l} className={category===l?"select":""} onClick={()=>x(l)}>{categoryMap[l]}</li>
                })}
                {/*<li className={category==="-"?"select":""} onClick={()=>x('-')}>支出</li>*/}
                {/*<li className={category==="+"?"select":""} onClick={()=>x("+")}>收入</li>*/}
            </ul>
        </Wrapper>
    )
}
export {CategorySection}