import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Button extends React.Component {


    static propTypes = {
        isActive: React.PropTypes.bool,
        iconName: React.PropTypes.string,

        onClick: React.PropTypes.func,


    }

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const {
            onClick,
            isActive,
            iconName,
        } = this.props;

        return (
            <TouchableOpacity
              style={[styles.payment, isActive ? styles.active : null]}
              onPress={onClick}>
                <Icon
                  name={iconName}
                  size={50}
                  color={isActive ? 'steelblue' : 'skyblue'} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    payment: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
    },
    active: {
        backgroundColor: 'skyblue',
    },
});
