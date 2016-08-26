
import React from 'react';
import { connect } from 'react-redux';

// react-native
import {
    View,
    StyleSheet,
    BackAndroid,
    ScrollView,
} from 'react-native';

// components
import Payer from '../components/Payer';
import NewPayer from '../components/NewPayer';
import ActionButton from 'react-native-action-button';

// services & utils
import {
    setActivePayer,
    addNewPayer,
    pickPayer,
    removePayerAtIndex,
} from '../services/payerList-service';

class PayerList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        activePayer: React.PropTypes.string,
        payerList: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    }

    // Try to move it to containers/App.js
    componentWillMount = () => {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const { dispatch, activePayer } = this.props;
            if (activePayer !== null) {
                dispatch(setActivePayer(null));
            }
            return false;
        });
    }

    render() {
        const {
            onPressActionBar,
            onSubmitEditing,
            onChangeText,
            onClickPayer,
            onClickRemovePayer,
        } = this;

        const { activePayer, payerList } = this.props;

        let payerListElement = payerList.map((payer, index) => (
            <Payer
              key={index}
              name={payer}
              onClickPayer={() => { onClickPayer(payer); }}
              onClickRemove={() => { onClickRemovePayer(index); }} />
            )
        );

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        {payerListElement}
                    </ScrollView>
                    <ActionButton
                      buttonColor="#34495e"
                      onPress={onPressActionBar} />
                </View>
                <NewPayer
                  onChangeText={(text => { onChangeText(text); })}
                  onSubmitEditing={onSubmitEditing}
                  name={activePayer}
                  isVisible={activePayer !== null} />
            </View>
        );
    }

    onPressActionBar = () => {
        const { dispatch } = this.props;
        dispatch(setActivePayer(''));
    }

    onSubmitEditing = () => {
        const { dispatch } = this.props;
        dispatch(addNewPayer());
    }
    onChangeText = (text) => {
        const { dispatch } = this.props;
        dispatch(setActivePayer(text));
    }

    onClickPayer = (name) => {
        const { dispatch, navigator } = this.props;
        dispatch(pickPayer(name));
        navigator.pop();
    }

    onClickRemovePayer = (index) => {
        const { dispatch } = this.props;
        dispatch(removePayerAtIndex(index));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
});

export default connect(state => {
    const { isAddPayer, activePayer, payerList } = state.payerList;
    return {
        isAddPayer,
        activePayer,
        payerList,
    };
})(PayerList);
