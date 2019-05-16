import React from 'react';
import './App.css';
import {Route} from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import InfoContainer from './components/PageOne/InfoContainer'

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/step-1" component={InfoContainer} />
        </div>
    );
}

export default App;
