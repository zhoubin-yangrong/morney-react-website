import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import {Tag} from "./views/Tag";
// 防止挂载全局样式混乱
const AppWrapper=styled.div`
color: #333;
`
export default function App() {
    return (
        <AppWrapper>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/money" />
                        </Route>

                        <Route exact path="/tags">
                            <Tags/>
                        </Route>
                        <Route exact path="/tags/:id">
                            <Tag/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AppWrapper>
    );
}



