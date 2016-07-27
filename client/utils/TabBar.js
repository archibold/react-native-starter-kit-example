const React = require('react');
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DefaultTabBar extends React.Component {
    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        underlineColor: React.PropTypes.string,
        underlineHeight: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
        style: View.propTypes.style,
        containerWidth: React.PropTypes.number,
        scrollValue: React.PropTypes.object,
    }

    static defaultProps = {
        activeTextColor: '#27ae60',
        inactiveTextColor: '#34495e',
        underlineColor: '#27ae60',
        backgroundColor: null,
        underlineHeight: 4,
    }

    renderTabOption(name, page) {
        const isTabActive = this.props.activeTab === page;
        const { activeTextColor, inactiveTextColor } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;

        return (
            <TouchableOpacity
              key={name}
              onPress={() => this.props.goToPage(page)}>
                <View style={[styles.tab, this.props.tabStyle]}>
                    <Icon
                      name={name}
                      size={30}
                      color={textColor} />
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: this.props.underlineHeight,
            backgroundColor: this.props.underlineColor,
            bottom: 0,
        };

        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs],
        });

        return (
            <View
              style={[styles.tabs, { backgroundColor: this.props.backgroundColor },
                  this.props.style]}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                <Animated.View style={[tabUnderlineStyle, { left }]} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
});

module.exports = DefaultTabBar;
