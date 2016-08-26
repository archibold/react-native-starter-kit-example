
import React from 'react';
import { connect } from 'react-redux';

// react-native
import {
    Navigator,
} from 'react-native';

// conteners
import PaymentList from './PaymentList';
import Payment from './Payment';
import PayerList from './PayerList';


// services & utils
import { init } from '../services/app-service';

class App extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
    }

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch(init());
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
