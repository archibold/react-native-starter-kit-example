
import React from 'react';
import { connect } from 'react-redux';

// react-native
import {
    View,
    BackAndroid,
    ScrollView,
    StyleSheet,
} from 'react-native';

// components
import ActionButton from 'react-native-action-button';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

// services & utils
import {
    remove,
} from '../services/paymentList-service';
import {
    LOANED,
    BORROWED,
} from '../utils/TypeOfPayment';

class PaymentList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        paymentList: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    }

    // This should be mounted in containers/App.js somehow
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
        const {
            navigator,
            paymentList,
        } = this.props;

        const {
            onClickRemove,
        } = this;

        const actionButtonIcon = (
            <Icon
              name="credit-card"
              color="white"
              size={20} />
        );

        const paymentListElement = paymentList.map((payment, index) => {
            let paymentIconColor = 'steelblue';
            let paymentIcon = '';
            let paymentBackIcon = '';
            let onClickAction = () => {
                onClickRemove(index);
            };

            if (payment.paymentType === LOANED) {
                paymentIcon = 'hand-o-up';
                paymentBackIcon = 'trash';
            }

            if (payment.paymentType === BORROWED) {
                paymentIcon = 'hand-o-down';
                paymentBackIcon = 'trash';
            }

            return (
                <Card
                  key={index}
                  paymentIcon={paymentIcon}
                  paymentIconColor={paymentIconColor}
                  paymentBackIcon={paymentBackIcon}
                  description={payment.description}
                  payer={payment.payer}
                  paymentType={payment.paymentType}
                  payment={payment.payment}
                  dateOfPayment={payment.dateOfPayment}
                  onClickPayback={onClickAction} />
          );
        });

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                      {paymentListElement}
                </ScrollView>
                <ActionButton
                  buttonColor="#34495e"
                  icon={actionButtonIcon}
                  onPress={() => { navigator.push({ name: 'Payment' }); }} />
            </View>
        );
    }

    onClickRemove = (index) => {
        const { dispatch } = this.props;
        dispatch(remove(index));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
});

export default connect(state => {
    const { paymentList } = state.paymentList;
    return {
        paymentList,
    };
})(PaymentList);
