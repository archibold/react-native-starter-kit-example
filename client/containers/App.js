
import React from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';

class App extends React.Component {

    render() {
        return (
            <Screen />
        );
    }
}


export default connect(s => s.app)(App);
