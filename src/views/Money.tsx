import Layout from "../components/layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFFFF;padding: 0 16px;
  > ol{display: flex;margin: 0 -12px 17px;
    > li{
      padding: 4px 17px;margin: 0 12px;background: #D9D9D9;border-radius: 18px;font-size: 14px;
    }
  }
  > button{
    font-style: normal;font-weight: normal;font-size: 14px;line-height: 22px;/* identical to box height, or 157% */background: #FFFFFF;border: none;
    border-bottom: 1px solid #333;padding: 0 2px;margin-bottom: 12px;
  }
`
const NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;
  >label{
    white-space: nowrap;
    margin-right:8px ;

  }
  > input{
    display: block;
    height: 72px;
    width: 100%;
    border: none;
    background: none;
    
  }
  
`
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
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
function Money() {
    return(
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NoteSection>
                <label>备注</label>
                <input type="text" placeholder="在这里添加备注信息"/>
            </NoteSection>
            <CategorySection>
                <ul>
                    <li className="select">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
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

            </NumberPadSection>
        </Layout>
        // <Wrapper>
        //     <Main><h2>记账页</h2>;</Main>
        //     <Nav/>
        // </Wrapper>

    )
}
export default Money