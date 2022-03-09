import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback,View } from 'react-native';
import CustomActionSheet from './CustomActionSheet';
import {IC_DOWN} from '../Assets/Images';

function showBottomSheet(ref) {
    ref?.current?.show();
}
function closeBottomSheet(ref){
    ref?.current.setModalVisible();
}
function CustomBottomSheet(props) {
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => showBottomSheet(props?.bottomSheetRef)}>
                <View>
                    <View style={styles.main}>
                        <View style={styles.textView}>
                            <View>
                                <Text style={styles.textTitle}>{props.title}</Text>
                                <Text style={styles.textTitleOr}>
                                    {props.selectedValue?.map((item) => item.name).join(', ')}
                                </Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Image
                                resizeMode={'contain'}
                                tintColor={'gray'}
                                style={styles.checkImage}
                                source={IC_DOWN}
                            />
                        </View>
                    
                    </View>
                    <View style={styles.horizontalLineView}/>
                
                </View>
            </TouchableWithoutFeedback>
            
            <CustomActionSheet
                heading={props?.heading}
                closeBottomSheet={()=>{closeBottomSheet(props?.bottomSheetRef)}}
                bottomSheetRef={props.bottomSheetRef} options={props.options}
                selectedValue={props.selectedValue}
                onSelectState={props.onSelectValue}
                multi={props.multi}/>
        </View>
    );
}

export default CustomBottomSheet;

export const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imageView: {
        height: 30,
        width: 30,
        marginEnd: 10,
        borderRadius: 25,
        backgroundColor: '#F8F9FB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 15,
        width: 15,
        tintColor: '#828DA0',
        alignItems: 'center',
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    textTitle: {
        fontSize: 14,
        textTransform: 'capitalize',
        marginVertical: 5,
    },
    textTitleOr: {
        padding: 0,
        fontWeight: 'bold',
    },
    checkImage: {
        height: 12,
        width: 12,
        tintColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalLineView: {
        height: 1,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: '#e8e8e8',
        width: '100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'space-between',
    
    },
    
});
