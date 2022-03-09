import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function CustomBoolean(props) {
        function checkSingleOrMultipleFilters(selected) {
            
                props?.onSelectedValue([selected]);
        }
    const options=[
        {
            id:1,
            name:'Yes',
            value:true
        },
        {
            id:2,
            name:'No',
            value:false
        }
    ]
    return (
        <View style={[styles.chipsView]}>
            {options?.map((item, index) => {
                let checkSelectedValue = props.selectedValue?.some((selected) => selected.id === item.id);
                return(
                    <TouchableOpacity key={index} onPress={() => checkSingleOrMultipleFilters(item)}>
                        <View
                            style={[styles.chipsTouchableView,
                                {
                                    backgroundColor: checkSelectedValue ? props?.chipsViewStyle?.backgroundColor : '#F0F5FC',
                                    borderColor: checkSelectedValue ? props?.chipsViewStyle?.borderColor : '#F0F5FC',
                                    borderWidth:checkSelectedValue ? props?.chipsViewStyle?.borderWidth : 0,
                                    marginEnd: 5,
                                },
                            ]}
                        >
                            <Text style={{
                                fontWeight: checkSelectedValue ? props?.chipsViewStyle?.fontWeight : 'normal',
                                color: checkSelectedValue ? props?.chipsViewStyle?.fontColor : '#575e64',
                            }}
                            >
                                {item.name}
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                );
            })
            }
        </View>
    
    );
}

export default CustomBoolean;
const styles = StyleSheet.create({
    chipsTouchableView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    chipsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 5,
    },
});
