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
        paymentIconColor: React.PropTypes.string,
        description: React.PropTypes.string,
        payer: React.PropTypes.string,
        paymentType: React.PropTypes.string,
        payment: React.PropTypes.string,
        currency: React.PropTypes.string,
        dateOfPayment: React.PropTypes.string,
        payBackDate: React.PropTypes.object,
        localization: React.PropTypes.string,

        onCheck: React.PropTypes.func,
        onCheckIcon: React.PropTypes.string,
        isActionPanelVisible: React.PropTypes.bool,
        onChangeActionPanel: React.PropTypes.func,
    }

    // static defaultProps = {
    //     paymentIcon: 'hand-o-up',
    //     // TODO max 50 length
    //     description: 'Sum ipsum lore, Lorem ipsum ipsum lore Lorem, ipsum',
    //     payer: 'Stasiek Kolanko',
    //     paymentType: '',
    //     currency: 'zł',
    //     payment: '30',
    //     dateOfPayment: new Date(),
    //     payBackDate: new Date(),
    //     localization: '',
    //     onCheck: () => {},
    // }

    render() {
        const { description,
            isActionPanelVisible,
            payer,
            paymentType,
            payment,
            currency,
            dateOfPayment,
            onCheck,
            onCheckIcon, paymentIcon,
            paymentIconColor } = this.props;
        const { onChangeActionPanel } = this;
        let actionPanelStyle = StyleSheet.create({});
        if (isActionPanelVisible) {
            actionPanelStyle = StyleSheet.create({
                enabled: {
                    opacity: 0.8,
                },
            });
        }

        const payDateString = dateOfPayment.substring(0, 10);

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
                      color="steelblue" />
                    <Text style={styles.information}>{payDateString}</Text>

                </View>
                <View style={styles.content}>

                    <Text style={styles.number}>{payment} {currency}</Text>
                    <Text style={styles.fullname}>{payer}</Text>
                    <Text style={styles.description}>{description}</Text>
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
        flex: 2,
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
        fontWeight: 'bold',
        fontSize: 20,
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
