import React from 'react';

import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

export default class NewPayer extends React.Component {


    static propTypes = {
        name: React.PropTypes.string,
        isVisible: React.PropTypes.bool,

        onChangeText: React.PropTypes.func,
        onSubmitEditing: React.PropTypes.func,
    }

    static defaultProps = {
        onChangeText: () => {},
        onSubmitEditing: () => {},
    }

    render() {
        const {
            name,
            isVisible,
            onChangeText,
            onSubmitEditing,
        } = this.props;

        if (!isVisible) {
            return null;
        }

        return (
            <View style={styles.layer}>
                <TextInput
                  value={name}
                  style={styles.input}
                  autoFocus
                  onChangeText={(text => { onChangeText(text); })}
                  onSubmitEditing={onSubmitEditing} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layer: {
        flex: 1,
        opacity: 0.8,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        fontSize: 25,
        alignSelf: 'stretch',
    },
});
