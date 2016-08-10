/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Main } from './client/utils/Main';
import { makeStore } from './client/utils/Store';
import { App } from './client/containers/App';

import { AppRegistry } from 'react-native';

class Micropayment extends Component {
    render() {
        return (
            <Main
              app={App}
              store={makeStore({})} />
        );
    }
}

AppRegistry.registerComponent('Micropayment', () => Micropayment);
