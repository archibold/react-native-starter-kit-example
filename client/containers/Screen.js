
import React from 'react';
import { connect } from 'react-redux';
import { increment, reset, changeText } from '../services/screen';

import Button from '../components/Button';
import Card from '../components/Card';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
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
                <ScrollView>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ScrollView>
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
        backgroundColor: 'steelblue',
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
