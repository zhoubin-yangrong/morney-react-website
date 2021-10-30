import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
const Wrapper =styled.div`
    border:1px solid red;
  height:100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  border: 1px solid greenyellow;
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  border: 1px solid skyblue;
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      padding: 16px 0 ;
    }
  }
`
export default function App() {
    return (
        <Router>
            <div>
                <Wrapper>
                    <Main>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/money" />
                            </Route>
                            <Route path="/tags">
                                <Tags />

                            </Route>
                            <Route path="/money">
                                <Money />
                            </Route>
                            <Route path="/statistics">
                                <Statistics />
                            </Route>
                            <Route path="*">
                                <NoMatch />
                            </Route>
                        </Switch>
                    </Main>

                    <Nav>
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
                    </Nav>
                </Wrapper>

            </div>
        </Router>
    );
}

function Statistics() {
    return <h2>统计页</h2>;
}

function Tags() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记账也</h2>;
}
function NoMatch() {
    return <h2>你丫404</h2>;
}



