
import React from 'react';
import { connect } from 'react-redux';
import { changeActionPanel } from '../actions/screen';

import Card from '../components/Card';

import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

class Screen extends React.Component {

    static propTypes = {
        value: React.PropTypes.bool,
        dispatch: React.PropTypes.func,
    }

    render() {
        const { value } = this.props;
        const { onChangeActionPanel } = this;

        // TODO take cards from storage
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card
                      isActionPanelVisible={value}
                      onChangeActionPanel={onChangeActionPanel} />
                </ScrollView>
            </View>
        );
    }

    onChangeActionPanel = (val) => {
        const { dispatch } = this.props;
        dispatch(changeActionPanel(val));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
});

export default connect(state => {
    const { value } = state.screen;
    return {
        value,
    };
})(Screen);
