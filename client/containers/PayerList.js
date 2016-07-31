
import React from 'react';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { setAddNewPayer, setActivePayer, addNewPayer } from '../services/payerList-service';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

class PayerList extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        isAddPayer: React.PropTypes.bool,
        activePayer: React.PropTypes.string,
        payerList: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    }
    render() {
        const { onPressActionBar, onSubmitEditing, onChangeText } = this;
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
        let payerListElement = payerList.map((o, i) =>{
            return (
                <View key={i} style={styles.name}>
                    <Text style={styles.nameText}>{o}</Text>
                </View>
            );
        }
        );

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    {payerListElement}
                    <View style={styles.name}>
                        <Text style={styles.nameText}>Olek Kowalski</Text>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.nameText}>Olek Kowalski</Text>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.nameText}>Olek Kowalski</Text>
                    </View>

                    <ActionButton
                      buttonColor="#34495e"
                      onPress={onPressActionBar} />
                </View>
                <View style={[styles.layer, styleAddPayer.addPayer]}>
                    <TextInput
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
        // navigator.pop();
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
        height: 75,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'skyblue',
        paddingLeft: 25,
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
