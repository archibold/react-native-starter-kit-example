
import React from 'react';
import { connect } from 'react-redux';
import { increment, reset, changeText } from '../services/screen';

import Button from '../components/Button';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Screen extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        counter: React.PropTypes.number,
        buttonText: React.PropTypes.string,
        dispatch: React.PropTypes.func,
    }

    render() {
        const { counter, buttonText } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <View style={styles.buttonView}>
                    <Button onClick={this.onIncrement} text={counter} />
                    <Button
                      onClick={this.onChangeText}
                      text={buttonText === '' ? 'text' : buttonText} />
                    <Button onClick={this.onReset} text="Reset" />
                </View>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonView: {
        flexDirection: 'row',
    },
});

export default connect(state => {
    const { counter, value } = state.screen;
    const buttonText = value;
    return {
        counter,
        buttonText,
    };
})(Screen);
