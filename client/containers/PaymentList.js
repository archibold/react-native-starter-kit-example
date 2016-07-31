
import React from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../utils/TabBar';
import ActionButton from 'react-native-action-button';

import {
    Text,
    View,
    ScrollView,
} from 'react-native';

class PaymentList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
    }

    render() {
        const { navigator } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <ScrollableTabView renderTabBar={() => (<TabBar />)}>
                    <Screen tabLabel="check" />
                    <ScrollView tabLabel="clock-o">
                        <View>
                            <Text>News</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
                <ActionButton
                  buttonColor="#34495e"
                  onPress={() => { navigator.push({ name: 'Payment' }); }} />
            </View>
        );
    }
}

export default connect(state => state)(PaymentList);
