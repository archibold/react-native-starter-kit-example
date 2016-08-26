import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Card extends React.Component {


    static propTypes = {
        paymentIcon: React.PropTypes.string,
        paymentIconColor: React.PropTypes.string,
        paymentBackIcon: React.PropTypes.string,
        description: React.PropTypes.string,
        payer: React.PropTypes.string,
        paymentType: React.PropTypes.string,
        payment: React.PropTypes.string,
        dateOfPayment: React.PropTypes.string,

        onClickPayback: React.PropTypes.func,
    }

    componentWillMount = () => {
        this.setState({});
    }

    render() {
        const { description,
            payer,
            payment,
            dateOfPayment,
            paymentIcon,
            paymentIconColor,
            paymentBackIcon,
        } = this.props;

        const {
            onClickPayback,
        } = this;

        const {
            editMode,
        } = this.state;

        const { onClickEditPayment } = this;

        let actionPanelStyle = StyleSheet.create({});
        if (editMode) {
            actionPanelStyle = StyleSheet.create({
                enabled: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            });
        }

        const payDateString = dateOfPayment.substring(0, 10);

        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={onClickEditPayment}>
                    <View style={styles.icon}>
                        <Icon
                          name={paymentIcon}
                          size={50}
                          color={paymentIconColor} />
                        <Text style={styles.information}>{payDateString}</Text>

                    </View>
                    <View style={styles.content}>

                        <Text style={styles.number}>{payment}</Text>
                        <Text style={styles.fullname}>{payer}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.actionPanel, actionPanelStyle.enabled]}>
                    <TouchableOpacity
                      onPress={onClickPayback}
                      style={styles.selectPayback} >
                        <Icon
                          name={paymentBackIcon}
                          color="white"
                          size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={onClickEditPayment}
                      style={styles.selectDone} >
                        <Icon
                          name="close"
                          color="white"
                          size={50} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onClickEditPayment = () => {
        this.setState({ editMode: !this.state.editMode });
    }
    onClickPayback = () => {
        const { onClickPayback } = this.props;
        this.setState({ editMode: false });
        onClickPayback();
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'skyblue',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        backgroundColor: 'skyblue',
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
        flex: 1,
        opacity: 0.8,
        height: 150,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectDone: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 150,
    },
    selectPayback: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 150,
    },
});
