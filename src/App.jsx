import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Profile } from "./Pages/Profile/Profile";
import { Home } from "./Pages/Home/Home";
import Alert from "./Components/Alert/Alert";
import { AlertState } from "./Context/alert/alertState";
import { GitHubState } from "./Context/github/githubState";

function App() {
    return (
        <GitHubState>
            <AlertState>
                <BrowserRouter>
                    <NavBar />
                    <div className="container pt-4">
                        <Alert alert={{ text: "test alert" }} />

                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/about" component={About} />
                            <Route path="/profile/:name" component={Profile} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GitHubState>
    );
}

export default App;
