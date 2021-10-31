import Nav from "./Nav";
import React from "react";
import styled from "styled-components";
const Wrapper =styled.div`
    //border:1px solid red;
  height:100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  //border: 1px solid greenyellow;
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
`

const Layout = (props:any)=>{
    return(
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}
export default Layout