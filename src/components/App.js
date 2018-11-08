import React, {Component} from 'react';
import './App.css';

import Players from './Players';
import Filters from './Filters';

class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="container">
                    <h2>Football Player Finder</h2>
                    <Filters/>
                    <Players/>
                </div>
            </div>

        );
    }
}

export default App;
