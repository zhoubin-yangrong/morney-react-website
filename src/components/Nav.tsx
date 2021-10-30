import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require("icons/tag.svg")
require("icons/money.svg")
require("icons/list.svg")



const NavWrapper = styled.nav`
  //border: 1px solid skyblue;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
  line-height: 24px;
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      padding: 4px 0 ;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px; 
      }
    }
  }
`
const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#tag"></use>
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"></use>
                    </svg>
                    <Link to="/money">记账也</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#list"></use>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav