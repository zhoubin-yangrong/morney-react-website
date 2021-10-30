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
export default function App() {
    return (
        <Router>
            <div>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/money" />
                            </Route>
                            <Route path="/tags">
                                <Tags></Tags>
                            </Route>
                            <Route path="/money">
                                <Money></Money>
                            </Route>
                            <Route path="/statistics">
                                <Statistics></Statistics>
                            </Route>
                            <Route path="*">
                                <NoMatch></NoMatch>
                            </Route>
                        </Switch>
            </div>
        </Router>
    );
}



