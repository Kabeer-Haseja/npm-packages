import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {IC_DOWN} from '../Assets/Images';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

function CustomDatePicker(props) {
    const [showPicker, setShowPicker] = useState(false);
    const [pickedDate, setPickedDate] = useState(null);
    
    function handleConfirm(date) {
        setPickedDate(date.toISOString());
        props.onDateSelected([date.toISOString()]);
        hideDatePicker();
    }
    
    function hideDatePicker() {
        setShowPicker(false);
    }
    
    useEffect(() => {
        if (props.selectedValue) {
            setPickedDate(props.selectedValue);
        }
    }, [props.selectedValue]);
    
    function getDateToShow() {
        return props?.desiredFormat ? moment(pickedDate).format(props.desiredFormat) : moment(pickedDate).format('DD MMM, YYYY');
    }
    
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => {
                setShowPicker(!showPicker);
            }}>
                <View>
                    <View style={styles.main}>
                        <View style={styles.textView}>
                            <View>
                                <Text style={styles.textTitle}>{props.title}</Text>
                                <Text style={styles.textTitleOr}>
                                    {pickedDate &&
                                        getDateToShow()
                                    }
                                </Text>
                            </View>
                        </View>
                        <View>
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
            <DateTimePickerModal
                isVisible={showPicker}
                mode={props.mode ? props.mode : 'datetime'}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minuteInterval={props.minuteInterval ? props.minuteInterval : 1}
            />
        </View>
    );
}

export default CustomDatePicker;
export const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%'
        
    },
    textTitle: {
        fontSize: 14,
        textTransform: 'capitalize',
        marginVertical: 5,
    },
    textTitleOr: {
        padding: 0,
        borderBottomWidth: 0.2,
        fontWeight: 'bold',
    },
    checkImage: {
        height: 12,
        width: 12,
        tintColor: 'black',
       },
    horizontalLineView: {
        flexDirection:'row',
        alignItems:'center',
        height: 1,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: '#e8e8e8',
    },
    
});
