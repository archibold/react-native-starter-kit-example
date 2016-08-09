
import React from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    BackAndroid,
} from 'react-native';

class PaymentList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
    }

    componentWillMount = () => {
        const { navigator } = this.props;
        BackAndroid.addEventListener('hardwareBackPress', () => {

            if (navigator.getCurrentRoutes().length === 1) {
                return false;
            }
            navigator.pop();
            return true;
        });
    }

    render() {
        const { navigator } = this.props;

        const actionButtonIcon = (
            <Icon
              name="credit-card"
              color="white"
              size={20} />
        )
        return (
            <View style={{ flex: 1 }}>
                <Screen tabLabel="check" />
                <ActionButton
                  buttonColor="#34495e"
                  icon={actionButtonIcon}
                  onPress={() => { navigator.push({ name: 'Payment' }); }} />
            </View>
        );
    }
}

export default connect(state => state)(PaymentList);
