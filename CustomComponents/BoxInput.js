import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import CustomTextView from './CustomTextView';

function BoxInput(props) {
    const [inFocus,setInFocus] = useState(false)
    
    const onFocusCallback = () => {
        setInFocus(true)
    }
    
    const onBlurCallback = () => {
        setInFocus(false)
    }
    
    
    function getInFocusColor(){
   
        if(props.inFocusColor)
        {
            return props.inFocusColor
        }
        else
        {
            return '#C1C0C0'
        }
    }
    return (
        <View>
              <View style={[styles.inputViewStyle, { ...props.viewStyle }]}>
              <View style={styles.placeholderView}>
                    <CustomTextView style={{color: inFocus ? getInFocusColor() : '#C1C0C0',textTransform:'capitalize'}}>
                        {props.placeholder}
                    </CustomTextView>
                </View>
                <TextInput
                    secureTextEntry={props.secureTextEntry}
                    multiline={props.multiline}
                    onFocus={onFocusCallback}
                    onBlur={onBlurCallback}
                    placeholder={props.textPlaceholder}
                    onChangeText={(value) => props.onChangeText(value)}
                    value={props.value}
                    style={[styles.inputTextStyle, props.style]}
                />
            </View>
     </View>
    );
}

export default BoxInput;

const styles=StyleSheet.create({
    inputViewStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#E8E8E8',
        height:60,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    },
    inputTextStyle:{
        borderRadius: 5,
        height: 60,
        textAlignVertical: 'center',
        padding:0,
        width:"100%",
        marginLeft: 15,
    },
    placeholderView:{
        position:'absolute',
        top:-10,
        left:15,
        zIndex:10,
        backgroundColor:'white',
        paddingHorizontal:5
    },
    
})
