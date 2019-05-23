import React from 'react';
import './App.css';
import { Route } from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import InfoContainer from './components/PageOne/InfoContainer'
import EmissionsContainer from './components/PageTwo/EmissionsContainer';
import ResultsContainer from './components/Results/ResultsContainer';
import TextWithTooltip from './components/Utils/TextWithTooltip';
import './components/Utils/styles.css'

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/step-1" component={InfoContainer} />
            <Route exact path="/step-2" component={EmissionsContainer} />
            <Route exact path="/results" component={ResultsContainer} />
            <Route path='/ecochain' component={() => {
                window.location.href = 'https://ecochain.com/software/';
                return null;
            }} />
            {/* <footer className="footer"> */}
                <TextWithTooltip topic='disclaimer' />
                {/* <i>No rights can be derived from the information given in this tool</i> */}
            {/* </footer> */}
        </div>
    );
}

export default App;
