import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {IC_CROSS, IC_PLUS} from '../Assets/Images';
import CustomAttachmentActionSheet from './CustomAttachmentActionSheet';

function CustomPicker(props) {
    function showBottomSheet(ref) {
        ref?.current?.show();
    }
    function closeBottomSheet(ref) {
        ref?.current.setModalVisible();
    }
    
    useEffect(()=>{
    },[props.selectedValue])
    
    function deleteItem(item)
    {
        const filtered=props.selectedValue.filter((selected)=>selected.localId!==item.localId)
        props.onSelectedValue(filtered)
    }
    return (
        <View>
        
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 5,
        }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>{props.title}</Text>
            <TouchableOpacity onPress={() => showBottomSheet(props?.bottomSheetRef)}>
            <Image source={IC_PLUS} style={{resizeMode: 'contain', height: 30, width: 30, tintColor: '#000000'}}/>
            </TouchableOpacity>
            
        </View>
         
                    <View style={{paddingTop:10}}>
                        {props.selectedValue.map((item,index)=>{
                            return(
                                <View  key={index} style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:5}}>
                                <Text >{item.name}</Text>
                                    <TouchableWithoutFeedback onPress={() =>deleteItem(item)}
                                    >
                                        <View style={styles.crossView}>
                                            <Image
                                                resizeMode={'contain'}
                                                style={styles.crossStyle}
                                                source={IC_CROSS}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
           )
                        })}
                    
                    </View>
            <CustomAttachmentActionSheet
                bottomSheetRef={props.bottomSheetRef}
                selectedValue={props.selectedValue}
                onSelectedValue={props.onSelectedValue}
                heading={props.heading}
                closeBottomSheet={() => {closeBottomSheet(props?.bottomSheetRef)}}
        
                multi={props.multi}/>



        </View>
    );
}

export default CustomPicker;
export const styles=StyleSheet.create({
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
})
