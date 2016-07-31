
import React from 'react';
import { connect } from 'react-redux';
import PaymentList from './PaymentList';
import Payment from './Payment';
import PayerList from './PayerList';

import {
    Navigator,
} from 'react-native';

class App extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
    }

    render() {
        return (
            <Navigator
              initialRoute={{ name: 'PayerList' }}
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
