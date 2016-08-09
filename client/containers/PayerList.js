
import React from 'react';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Payer from '../components/Payer';
import {
    setAddNewPayer,
    setActivePayer,
    addNewPayer,
    setPayer,
    removePayerAtIndex,
} from '../services/payerList-service';
import {
    View,
    StyleSheet,
    TextInput,
    BackAndroid,
    ScrollView,
} from 'react-native';

class PayerList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        isAddPayer: React.PropTypes.bool,
        activePayer: React.PropTypes.string,
        payerList: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    }
    componentWillMount = () => {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const { dispatch, isAddPayer } = this.props;
            if (isAddPayer) {
                dispatch(setAddNewPayer(false));
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
        const { isAddPayer, activePayer, payerList } = this.props;

        // TODO find better naming
        const styleAddPayer = StyleSheet.create({});
        if (isAddPayer) {
            styleAddPayer.addPayer = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            };
        }

        let payerListElement = payerList.map((payer, index) => {
            return (
                <Payer
                  key={index}
                  name={payer}
                  onClickPayer={() => { onClickPayer(payer); }}
                  onClickRemove={() => { onClickRemovePayer(index); }} />
            );
        }
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
                <View style={[styles.layer, styleAddPayer.addPayer]}>
                    <TextInput
                      ref="input"
                      value={activePayer}
                      style={styles.input}
                      autoFocus={isAddPayer}
                      onChangeText={(text => { onChangeText(text); })}
                      onSubmitEditing={onSubmitEditing} />
                </View>
            </View>
        );
    }

    onPressActionBar = () => {
        const { dispatch } = this.props;
        dispatch(setAddNewPayer(true));
        this.refs.input.focus();
    }

    onSubmitEditing = () => {
        const { dispatch } = this.props;
        dispatch(addNewPayer());
        dispatch(setAddNewPayer(false));
    }
    onChangeText = (text) => {
        const { dispatch } = this.props;
        dispatch(setActivePayer(text));
    }

    onClickPayer = (name) => {
        const { dispatch, navigator } = this.props;
        dispatch(setPayer(name));
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

    layer: {
        flex: 1,
        opacity: 0.8,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        fontSize: 25,
        alignSelf: 'stretch',
    },
    name: {
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'skyblue',
        paddingLeft: 25,
    },
    selectPayer: {
        flex: 5,
    },
    selectEditPayer: {
        flex: 1,
    },
    nameText: {
        fontSize: 25,
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
