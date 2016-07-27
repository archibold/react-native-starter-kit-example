
import React from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../utils/TabBar';

import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import ActionButton from 'react-native-action-button';
class App extends React.Component {

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollableTabView renderTabBar={() => (<TabBar />)}>
                    <ScrollView tabLabel="clock-o">
                        <View>
                            <Text>News</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="hand-o-up">
                        <View>
                            <Text>News</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="hand-o-down">
                        <View>
                            <Text>News</Text>
                        </View>
                    </ScrollView>
                    <Screen tabLabel="check" />
                </ScrollableTabView>
                <ActionButton
                  buttonColor="#34495e"
                  onPress={() => { console.log("hi")}} />
            </View>
        );
    }
}


export default connect(s => s.app)(App);
