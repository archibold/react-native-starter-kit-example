
import React from 'react';
import { connect } from 'react-redux';
import PaymentList from './PaymentList';
import Payment from './Payment';
import PayerList from './PayerList';

import {
    Navigator,
} from 'react-native';

import { setPayerList as setPayerListAction } from '../actions/payerList-actions';
import { setPaymentList as setPaymentListAction } from '../actions/paymentList-actions';
import storage from '../utils/Storage';

class App extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
    }

    componentWillMount = () => {
        const { dispatch } = this.props;
        storage.get('payerList', []).then((payerList) => {
            dispatch(setPayerListAction(payerList));
        });
        storage.get('paymentList', []).then((paymentList) => {
            dispatch(setPaymentListAction(paymentList));
        });
    }

    render() {
        return (
            <Navigator
              initialRoute={{ name: 'Main' }}
              renderScene={(route, navigator) => {
                  if (route.name === 'Main') {
                      return (
                          <PaymentList navigator={navigator} />
                      );
                  }

                  if (route.name === 'Payment') {
                      return (
                          <Payment navigator={navigator} />
                      );
                  }
                  if (route.name === 'PayerList') {
                      return (
                          <PayerList navigator={navigator} />
                      );
                  }
                  return null;
              }
            }
          />
        );
    }
}


export default connect(state => state)(App);
