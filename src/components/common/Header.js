import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {headerText}
            </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export { Header };
