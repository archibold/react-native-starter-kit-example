import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
    Text,
} from 'react-native';

export default class NewPayment extends React.Component {


    static propTypes = {
        payerName: React.PropTypes.string,
        payment: React.PropTypes.string,
        description: React.PropTypes.string,

        onClickPayer: React.PropTypes.func,
        onChangePrice: React.PropTypes.func,
        onChangeDescription: React.PropTypes.func,

    }

    static defaultProps = {
        onClick: () => {},
        onChangePrice: () => {},
        onChangeDescription: () => {},
    }

    render() {
        const {
            payerName,
            payment,
            description,
            onClickPayer,
            onChangePrice,
            onChangeDescription,
        } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                  style={styles.fullNameButton}
                  onPress={onClickPayer}>
                    <Text style={styles.fullnameButtonText}>{payerName}</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.priceInput}
                  autoFocus
                  keyboardType="numeric"
                  value={payment}
                  onChangeText={(value) => { onChangePrice(value); }}
                  placeholder="How many" />
                <TextInput
                  style={styles.descriptionInput}
                  value={description}
                  placeholder="for what"
                  onChangeText={(value) => { onChangeDescription(value); }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        alignSelf: 'stretch',
        margin: 5,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'column',
    },
    fullNameButton: {
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    fullnameButtonText: {
        fontSize: 25,
    },
    priceInput: {
        fontSize: 25,
    },
    descriptionInput: {
        fontSize: 25,
    },
});
