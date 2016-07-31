import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Button extends React.Component {


    static propTypes = {
        paymentIcon: React.PropTypes.string,
        describe: React.PropTypes.string,
        fullName: React.PropTypes.string,
        typeOfPayment: React.PropTypes.string,
        price: React.PropTypes.number,
        currency: React.PropTypes.string,
        payDate: React.PropTypes.object,
        payBackDate: React.PropTypes.object,
        localization: React.PropTypes.string,

        onCheck: React.PropTypes.func,
        onCheckIcon: React.PropTypes.string,
        isActionPanelVisible: React.PropTypes.bool,
        onChangeActionPanel: React.PropTypes.func,
    }

    static defaultProps = {
        paymentIcon: 'hand-o-up',
        // TODO max 50 length
        describe: 'Sum ipsum lore, Lorem ipsum ipsum lore Lorem, ipsum',
        fullName: 'Stasiek Kolanko',
        typeOfPayment: '',
        currency: 'zł',
        price: 30,
        payDate: new Date(),
        payBackDate: new Date(),
        localization: '',
        onCheck: () => {},
    }

    render() {
        const { describe,
            isActionPanelVisible,
            fullName,
            typeOfPayment,
            price,
            currency,
            payDate,
            onCheck,
            onCheckIcon, paymentIcon } = this.props;
        const { onChangeActionPanel } = this;
        let actionPanelStyle = StyleSheet.create({});
        if (isActionPanelVisible) {
            actionPanelStyle = StyleSheet.create({
                enabled: {
                    opacity: 0.8,
                },
            });
        }

        const payDateString = payDate.toISOString().substring(0, 10);

        return (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={1}
              onPress={onChangeActionPanel}>
                <View style={[styles.actionPanel, actionPanelStyle.enabled]}>
                    <Text style={styles.actionPanelText}>EDIT</Text>
                </View>
                <View style={styles.icon}>
                    <Icon
                      name={paymentIcon}
                      size={50}
                      color="#FF4500" />
                    <Text style={styles.information}>{payDateString}</Text>

                </View>
                <View style={styles.content}>

                    <Text style={styles.number}>{price} {currency}</Text>
                    <Text style={styles.fullname}>{fullName}</Text>
                    <Text style={styles.description}>{describe}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    onChangeActionPanel = () => {
        const { isActionPanelVisible } = this.props;
        const newIsActionPanelVisible = !isActionPanelVisible;

        this.props.onChangeActionPanel(newIsActionPanelVisible);
    }
}


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 150,
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
    number: {
        fontSize: 50,
        flexDirection: 'column',
    },
    fullname: {
        fontSize: 15,
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
