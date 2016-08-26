
import React from 'react';
import { connect } from 'react-redux';

// react-native
import {
    StyleSheet,
    View,
} from 'react-native';

// components
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Button from '../components/Button';
import NewPayment from '../components/NewPayment';

// services & utils
import {
    setPayment,
    setDescription,
    setPaymentType,
} from '../services/payment-service';
import {
    addPayment,
} from '../services/paymentList-service';

import {
    LOANED,
    BORROWED,
} from '../utils/TypeOfPayment';


class Payment extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        payerName: React.PropTypes.string,
        payment: React.PropTypes.string,
        paymentType: React.PropTypes.string,
        description: React.PropTypes.string,
        dispatch: React.PropTypes.func,
    }

    render() {
        const {
            payerName,
            payment,
            description,
            paymentType } = this.props;

        const {
            onClickPayer,
            onChangePayment,
            onChangeDescription,
            onChangePaymentType,
            onAddNewPayment,
        } = this;

        const actionButtonIcon = (
            <Icon
              name="check"
              size={20}
              color="white" />
        );

        return (
            <View style={styles.container}>
                <NewPayment
                  onClickPayer={onClickPayer}
                  onChangePrice={(value) => { onChangePayment(value); }}
                  onChangeDescription={(value) => { onChangeDescription(value); }}

                  payerName={payerName}
                  payment={payment}
                  description={description}
                />
                <View style={styles.paymentTypeContainer}>
                    <Button
                      isActive={paymentType === LOANED}
                      iconName="hand-o-up"
                      onClick={() => { onChangePaymentType(LOANED); }} />
                    <Button
                      isActive={paymentType === BORROWED}
                      iconName="hand-o-down"
                      onClick={() => { onChangePaymentType(BORROWED); }} />
                </View>
                <ActionButton
                  icon={actionButtonIcon}
                  buttonColor="#34495e"
                  onPress={onAddNewPayment} />
                <KeyboardSpacer />
            </View>
        );
    }

    onClickPayer = () => {
        const { navigator } = this.props;
        dismissKeyboard();
        navigator.push({ name: 'PayerList' });
    }

    onChangeDescription = (description) => {
        const { dispatch } = this.props;
        dispatch(setDescription(description));
    }
    onChangePayment = (payment) => {
        const { dispatch } = this.props;
        dispatch(setPayment(payment));
    }
    onChangePaymentType = (paymentType) => {
        const { dispatch } = this.props;
        dispatch(setPaymentType(paymentType));
    }

    onAddNewPayment = () => {
        const { dispatch, navigator } = this.props;
        dispatch(addPayment());
        navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
    paymentTypeContainer: {
        flexDirection: 'row',
        margin: 5,
        marginTop: 0,
    },
});

export default connect(state => {
    const { payer, payment, description, paymentType } = state.payment;
    let payerName = payer;
    if (payerName === '') {
        payerName = 'Who';
    }
    return {
        payerName,
        payment,
        description,
        paymentType,
    };
})(Payment);
