
import React from 'react';
import { connect } from 'react-redux';
import { setPayment, setDescription, setPaymentType } from '../services/payment-service';
import {
    addPayment,
    } from '../services/paymentList-service';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
    LOANED,
    BORROWED,
} from '../utils/TypeOfPayment';

import dismissKeyboard from 'react-native-dismiss-keyboard';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    BackAndroid,
} from 'react-native';

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
        // TODO move navigator action up! hurry!
        const { payerName, payment, description, paymentType } = this.props;
        const {
            onClickPayer,
            onChangePayment,
            onChangeDescription,
            onChangePaymentType,
            onAddNewPayment,
        } = this;

        let loanActive = StyleSheet.create({});
        let borrowActive = StyleSheet.create({});
        if (paymentType === LOANED) {
            loanActive = StyleSheet.create({
                style: {
                    backgroundColor: 'skyblue',
                },
            });
        }

        if (paymentType === BORROWED) {
            borrowActive = StyleSheet.create({
                style: {
                    backgroundColor: 'skyblue',
                },
            });
        }

        const actionButtonIcon = (
            <Icon
              name="check"
              size={20}
              color="white" />
        );
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.fullNameContent}
                      onPress={onClickPayer}>
                        <Text style={styles.fullname}>{payerName}</Text>
                    </TouchableOpacity>
                    <View style={styles.price}>
                        <TextInput
                          style={styles.number}
                          autoFocus
                          keyboardType="numeric"
                          value={payment.toString()}
                          onChangeText={(value) => { onChangePayment(value); }}
                          placeholder="How many" />
                        <Text style={styles.currency}>zł</Text>
                    </View>
                    <TextInput
                      style={styles.description}
                      value={description}
                      placeholder="for what"
                      onChangeText={(value) => { onChangeDescription(value); }} />
                  <ActionButton
                      icon={actionButtonIcon}
                      buttonColor="#34495e"
                      onPress={onAddNewPayment} />
                </View>
                <View style={styles.paymentTypeContainer}>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.paymentUp, loanActive.style]}
                      onPress={() => { onChangePaymentType(LOANED); }}>
                        <Icon
                          name="hand-o-up"
                          size={50}
                          color={paymentType === LOANED? "steelblue" : "skyblue"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.paymentDown, borrowActive.style]}
                      onPress={() => { onChangePaymentType(BORROWED); }}>
                        <Icon
                          name="hand-o-down"
                          size={50}
                          color={paymentType === BORROWED? "steelblue": "skyblue"} />
                    </TouchableOpacity>
                </View>
                <KeyboardSpacer />
            </View>
        );
    }

    onClickPayer = () => {
        const { navigator } = this.props;
        dismissKeyboard();
        navigator.push({ name: 'PayerList' });
    }

    onChangeDescription = (value) => {
        const { dispatch } = this.props;
        dispatch(setDescription(value));
    }
    onChangePayment = (value) => {
        const { dispatch } = this.props;
        dispatch(setPayment(value));
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
    content: {
        backgroundColor: 'skyblue',
        alignSelf: 'stretch',
        margin: 5,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },
    paymentTypeContainer: {
        flexDirection: 'row',

        margin: 5,
        marginTop: 0,
    },
    paymentDown: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
    },
    paymentUp: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
    },
    // card: {
    //     flexDirection: 'row',
    //     minHeight: 150,
    //     backgroundColor: 'skyblue',
    //     margin: 5,
    // },
    icon: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    information: {
        flexDirection: 'column',
        fontSize: 15,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 25,
        width: 75,
        flex: 1,
    },
    currency: {
        fontSize: 25,
        flex: 2,
    },
    fullNameContent: {
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    fullname: {
        fontSize: 25,
        flexDirection: 'column',
    },
    description: {
        fontSize: 25,
        borderBottomWidth: 0,
        flexDirection: 'column',
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
