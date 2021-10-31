import styled from "styled-components";

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
export {CategorySection}