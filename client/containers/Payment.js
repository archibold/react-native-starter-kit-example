
import React from 'react';
import { connect } from 'react-redux';
import { increment, reset, changeText } from '../services/screen';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class Payment extends React.Component {

    static propTypes = {
        navigator: React.PropTypes.object,
        dispatch: React.PropTypes.func,
    }

    render() {
        // TODO move navigator action up! hurry!
        const { navigator } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.icon}>
                        <Icon
                          name="hand-o-up"
                          size={50}
                          color="#FF4500" />
                        <Text style={styles.information}>24-06-2016</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.price}>
                            <TextInput
                              style={styles.number}
                              autoFocus
                              keyboardType="numeric"
                              placeholder="0" />
                            <Text style={styles.currency}>zł</Text>
                        </View>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => { navigator.push({ name: 'PayerList' }); }}>
                            <Text style={styles.fullname}>Kamil Kowalski</Text>
                        </TouchableOpacity>

                        <TextInput style={styles.description} />
                    </View>
                </View>
                <ActionButton
                  buttonColor="#34495e"
                  onPress={() => { navigator.pop(); }} />
                <KeyboardSpacer />
            </View>
        );
    }

    onIncrement = () => {
        const { dispatch } = this.props;
        dispatch(increment());
    }
    onReset = () => {
        const { dispatch } = this.props;
        dispatch(reset());
    }
    onChangeText = () => {
        const { dispatch } = this.props;
        dispatch(changeText('a'));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
    },
    card: {
        flexDirection: 'row',
        minHeight: 150,
        backgroundColor: 'skyblue',
        margin: 5,
    },
    icon: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 3,
        alignSelf: 'stretch',
        margin: 5,
        marginLeft: 0,
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
    fullname: {
        fontSize: 25,
        flexDirection: 'column',
    },
    description: {
        fontSize: 15,
        flexDirection: 'column',
    },

    actionPanel: {
        position: 'absolute',
        zIndex: 10,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0,

    },
    actionPanelText: {
        fontSize: 50,
        color: 'white',
    },
});

export default connect(state => state)(Payment);
