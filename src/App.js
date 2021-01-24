import './App.css';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Loader from "./components/loader";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {useAuthenticated} from './hooks/useAuthenticate'

function App() {
    const {user, loaded} = useAuthenticated()

    return (
        <div className="app">
            {loaded ?
                <Router>
                    <Switch>
                        <Route path="/auth"
                               render={() => {
                                   return !user ? <Auth/> : <Redirect
                                       to={{
                                           pathname: "/",
                                       }}
                                   />
                               }}
                        />
                        <>
                            <Header/>
                            <Route path="/"
                                   render={() => {
                                       return user ? <Dashboard/> : <Redirect
                                           to={{
                                               pathname: "/auth",
                                           }}
                                       />
                                   }}
                            />
                        </>
                    </Switch>
                </Router> :
                <Loader/>
            }
        </div>
    );
}

export default App;
