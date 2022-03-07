import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CustomChipSelector(props) {
    
    function checkSingleOrMultipleFilters(selected) {
        if (props?.multi) {
            const filtered = props?.selectedValue?.some((item) => item.id === selected.id);
            if (filtered) {
                let filteredItems = props?.selectedValue?.filter((item) => item.id !== selected.id);
                props?.onSelectedValue(filteredItems);
            } else {
                let tempArray = [...props?.selectedValue];
                tempArray.push(selected);
                props?.onSelectedValue(tempArray);
            }
        } else {
            props?.onSelectedValue([selected]);
        }
    }
    
    return (
        <View style={[styles.chipsView]}>
            
            {props?.options?.map((item, index) => {
                let checkSelectedValue = props.selectedValue.some((selected) => selected.id === item.id);
                return (
                    <TouchableOpacity key={index} onPress={() => checkSingleOrMultipleFilters(item)}>
                        <View
                            style={[styles.chipsTouchableView,
                                {
                                    backgroundColor: checkSelectedValue ? props?.chipsViewStyle?.backgroundColor : '#F0F5FC',
                                    borderColor: checkSelectedValue ? props?.chipsViewStyle?.borderColor : '#F0F5FC',
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

export default CustomChipSelector;
const styles = StyleSheet.create({
    chipsTouchableView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 0.5,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    chipsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 5,
        marginStart: 30,
    },
});
