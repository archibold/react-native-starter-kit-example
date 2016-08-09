import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Payer extends React.Component {


    static propTypes = {
        name: React.PropTypes.string,
        onClickPayer: React.PropTypes.func,
        onClickRemove: React.PropTypes.func,
        onClickDone: React.PropTypes.func,
    }

    componentWillMount = () => {
        this.setState({});
    }

    render() {
        const {
            name,
            onClickPayer,
        } = this.props;
        const {
            onClickEditPayer,
            onClickRemovePayer,
        } = this;
        const {
            editMode,
        } = this.state;


        // TODO find better naming
        const styleEditMode = StyleSheet.create({});
        if (editMode) {
            styleEditMode.editMode = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            };
        }

        return (
            <View style={styles.name}>
                <TouchableOpacity
                  style={styles.selectPayer}
                  onPress={() => { onClickPayer(name); }}>
                    <Text style={styles.nameText}>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.selectEditPayer}
                  onPress={onClickEditPayer}>
                  <Icon
                    name="ellipsis-v"
                    size={20} />
                </TouchableOpacity>
                <View style={[styles.layer, styleEditMode.editMode]}>
                    <View style={styles.layerContainer}>
                    </View>
                    <TouchableOpacity
                        style={styles.selectRemove}
                        onPress={onClickRemovePayer}>
                        <Icon
                            name="trash"
                            color="white"
                            size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.selectDone}
                        onPress={onClickEditPayer}>
                        <Icon
                            name="close"
                            color="white"
                            size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onClickEditPayer = () => {
        this.setState({ editMode: !this.state.editMode });
    }
    onClickRemovePayer = () => {
        const { onClickRemove } = this.props;
        this.setState({ editMode: false });
        onClickRemove();
    }
}

const styles = StyleSheet.create({
    name: {
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'skyblue',
        paddingLeft: 25,
    },
    selectPayer: {
        flex: 5,
    },
    selectEditPayer: {
        alignItems: 'center',
        flex: 1,
    },
    nameText: {
        fontSize: 25,
    },
    layer: {
        position: 'absolute',
        flex: 1,
        opacity: 0.8,
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
    },
    layerContainer: {
        flex: 4,
    },
    selectDone: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 75,
    },
    selectRemove: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 75,
    },
});
