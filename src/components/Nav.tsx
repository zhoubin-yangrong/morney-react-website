import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";




const NavWrapper = styled.nav`
  background: #fff;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
  line-height: 24px;
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      a{
        padding: 4px 0 ;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.selected{
          color: skyblue;
          .icon{
            fill: skyblue;
          }
        }
        .icon{
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`
const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <NavLink activeClassName="selected" to="/tags">
                        <Icon name="#tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected"  to="/money">
                        <Icon name="#money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/statistics">
                        <Icon name="#list"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav