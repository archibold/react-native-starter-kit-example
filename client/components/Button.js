import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Button extends React.Component {


    static propTypes = {
        text: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]),
        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const { onClick, text } = this.props;

        return (
            <TouchableOpacity
              style={styles.button}
              onPress={onClick}
              activeOpacity={1} >
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
        margin: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});
