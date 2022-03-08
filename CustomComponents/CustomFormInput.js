import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function CustomFormInput(props) {
    
    return (
        <View>
            <View style={styles.main}>
                <View style={styles.textView}>
                    <View style={styles.textViewStyle}>
                        <Text
                            style={[styles.textStyle, props.textTitleStyle]}
                        >
                            {props.title}
                        </Text>
                        <TextInput
                            returnKeyType={props.multiline ? 'done' : null}
                            placeholderTextColor={props.placeholderTextColor}
                            onChangeText={props.onChangeText}
                            keyboardType={props.keyboardType}
                            value={props.value}
                            multiline={props.multiline}
                            style={[styles.textInput, props.textInputStyle]}
                            placeholder={props.placeholder}
                        />
                        <View style={styles.horizontalLineView}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CustomFormInput;

export const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    horizontalLineView: {
        height: 1,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: '#e8e8e8',
        width: '100%',
    },
    textViewStyle: {
        width: '100%',
        alignItems: 'flex-start',
    },
    textStyle: {
        fontSize: 14,
        textTransform: 'capitalize',
        paddingBottom: 3,
    },
    textInput: {
        textAlignVertical: 'top',
        padding: 0,
        color: '#000000',
        width: '100%',
    },
    
});
