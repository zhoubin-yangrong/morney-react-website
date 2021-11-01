import styled from "styled-components";

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
export {Wrapper}