
import React from 'react';
import { connect } from 'react-redux';
import { changeActionPanel } from '../actions/screen';

import Card from '../components/Card';

import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import {
    LOANED,
    BORROWED,
} from '../utils/TypeOfPayment';

class Screen extends React.Component {

    static propTypes = {
        value: React.PropTypes.bool,
        dispatch: React.PropTypes.func,
        paymentList: React.PropTypes.array,
    }

    render() {
        const { value, paymentList } = this.props;
        const { onChangeActionPanel } = this;
        // console.log(paymentList);
        const paymentListElement = paymentList.map((payment, index) => {
            // <Card
            //   isActionPanelVisible={value}
            //   onChangeActionPanel={onChangeActionPanel} /
            const paymentIconColor = (
                payment.paymentType === LOANED) ? '#e74c3c' : '#27ae60';
            const paymentIcon = (
                payment.paymentType === LOANED) ? 'hand-o-up' : 'hand-o-down';
            return (
                <Card
                  key={index}
                  description={payment.description}
                  payer={payment.payer}
                  payment={payment.payment}
                  paymentType={payment.paymentType}
                  paymentIcon={paymentIcon}
                  paymentIconColor={paymentIconColor}
                  dateOfPayment={payment.dateOfPayment}
                  isActionPanelVisible={value}
                  onChangeActionPanel={onChangeActionPanel} />
          );
        });
        // TODO take cards from storage
        return (
            <View style={styles.container}>
                <ScrollView>
                      {paymentListElement}
                </ScrollView>
            </View>
        );
    }

    onChangeActionPanel = (val) => {
        const { dispatch } = this.props;
        dispatch(changeActionPanel(val));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
});

export default connect(state => {
    const { value } = state.screen;
    const { paymentList } = state.paymentList;
    return {
        paymentList,
        value,
    };
})(Screen);
