import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,

    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import x from "./icons/tag.svg"

console.log(x)
const Wrapper =styled.div`
    border:1px solid red;
  height:100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  //border: 1px solid greenyellow;
  flex-grow: 1;
  overflow: auto;
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
                    //底部导航
                    <Nav/>
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



