import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.nav`
  //border: 1px solid skyblue;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
  line-height: 24px;
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      padding: 16px 0 ;
    }
  }
`
const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账也</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav