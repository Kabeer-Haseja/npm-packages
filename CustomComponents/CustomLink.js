import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import CustomLinkActionSheet from './CustomLinkActionSheet';
import {IC_CROSS} from '../Assets/Images';

function CustomLink(props) {
    function showBottomSheet(ref) {
        ref?.current?.show();
    }
    
    function closeBottomSheet(ref) {
        ref?.current.setModalVisible();
    }
    
    return (
        <View style={styles.chipsView}>
            <TouchableOpacity onPress={() => showBottomSheet(props?.bottomSheetRef)}>
                <View
                    style={[styles.chipsTouchableView,
                        {
                            backgroundColor: props?.chipsViewStyle ? props?.chipsViewStyle?.backgroundColor : '#F0F5FC',
                            borderColor: props?.chipsViewStyle ? props?.chipsViewStyle?.borderColor : '#F0F5FC',
                            borderWidth:props?.chipsViewStyle ? props?.chipsViewStyle?.borderWidth : 0,
                            marginEnd: 5,
                        },
                    ]}
                >
                    {!props.selectedValue.title ?
                        <Text style={{
                            fontWeight: props?.chipsViewStyle ? props?.chipsViewStyle?.fontWeight : 'normal',
                            color: props?.chipsViewStyle ? props?.chipsViewStyle?.fontColor : '#575e64',
                        }}
                        >
                            Add Link
                        </Text>
                        :
                        <Text style={{
                            fontWeight: props?.chipsViewStyle ? props?.chipsViewStyle?.fontWeight : 'normal',
                            color: props?.chipsViewStyle ? props?.chipsViewStyle?.fontColor : '#575e64',
                            paddingRight: 5,
                            textDecorationLine: 'underline',
                        }}
                              onPress={() => Linking.openURL(`https://${props.selectedValue.link}`)}
                        >
                            {props.selectedValue.title}{props.selectedValue.link}
                        </Text>
                        
                    }
                    {props.selectedValue.link &&
                        <TouchableWithoutFeedback onPress={() => props.onSelectedValue([])}
                        >
                            <View style={styles.crossView}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.crossStyle}
                                    source={IC_CROSS}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    }
                </View>
            </TouchableOpacity>
            <CustomLinkActionSheet
                bottomSheetRef={props.bottomSheetRef}
                onSelectedValue={props.onSelectedValue}
                selectedValue={props.selectedValue}
                closeBottomSheet={() => {closeBottomSheet(props?.bottomSheetRef);
                }}
            />
        </View>
    );
}

export default CustomLink;
const styles = StyleSheet.create({
    chipsTouchableView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    chipsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 5,
        marginStart: 30,
    },
    crossView: {
        height: 25,
        width: 25,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ba1f24',
        
    },
    crossStyle: {
        height: 15,
        width: 15,
        marginStart: 7,
        marginEnd: 7,
        top: 1,
        tintColor: '#fff',
    },
});
