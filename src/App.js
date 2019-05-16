import React from 'react';
import './App.css';
import {Route} from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import InfoContainer from './components/PageOne/InfoContainer'
import EmissionsContainer from './components/PageTwo/EmissionsContainer';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/step-1" component={InfoContainer} />
            <Route exact path="/step-2" component={EmissionsContainer} />
        </div>
    );
}

export default App;
