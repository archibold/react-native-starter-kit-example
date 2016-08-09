
import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import {
    remove,
} from '../services/paymentList-service';

import {
    LOANED,
    BORROWED,
} from '../utils/TypeOfPayment';

class Screen extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
        paymentList: React.PropTypes.array,
    }

    render() {
        const { paymentList } = this.props;
        const {
            onClickRemove,
        } = this;
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
                onClickAction = () => {
                    onClickRemove(index);
                };
            }
            if (payment.paymentType === BORROWED) {
                paymentIcon = 'hand-o-down';
                paymentBackIcon = 'trash';
                onClickAction = () => {
                    onClickRemove(index);
                };
            }

            return (
                <Card
                  key={index}
                  description={payment.description}
                  payer={payment.payer}
                  payment={payment.payment}
                  paymentType={payment.paymentType}
                  paymentIcon={paymentIcon}
                  paymentBackIcon={paymentBackIcon}
                  paymentIconColor={paymentIconColor}
                  onClickPayback={onClickAction}
                  dateOfPayment={payment.dateOfPayment} />
          );
        });
        return (
            <View style={styles.container}>
                <ScrollView>
                      {paymentListElement}
                </ScrollView>
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
})(Screen);
