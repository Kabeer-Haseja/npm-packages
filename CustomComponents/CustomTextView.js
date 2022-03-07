import React from 'react';
import {Text,StyleSheet} from 'react-native';

function CustomTextView(props) {
    return (
        <Text
            style={[styles.textStyle, props.style]}>
            {props.children}
        </Text>
    );
}

export default CustomTextView;
const styles=StyleSheet.create({
    textStyle: {
        color: "#000",
        fontSize: 14,
    },
})
