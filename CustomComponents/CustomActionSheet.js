import React,{useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {FlatList, ScrollView, Text, TouchableOpacity, View, StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import {IC_CHECK, IC_CROSS} from '../Assets/Images';

function CustomActionSheet(props) {
    const [tempSelectedValue, setTempSelectedValue] = useState([]);
    
    function checkSingleOrMultipleFilters(selected) {
        if (props.multi) {
            const filtered = props.selectedValue.some((item) => item.id === selected.id);
            if (filtered) {
                let filteredItems = props.selectedValue.filter((item) => item.id !== selected.id);
                props.onSelectState(filteredItems);
            } else {
                let temp = [...props.selectedValue];
                temp.push(selected);
                props.onSelectState(temp);
            }
        } else {
            props.onSelectState([selected]);
        }
    }
    
    function temporaryAddItems(selected){
        if (props.multi) {
            const filtered = tempSelectedValue.some((item) => item.id === selected.id);
            if (filtered) {
                let filteredItems = tempSelectedValue.filter((item) => item.id !== selected.id);
                setTempSelectedValue(filteredItems);
            } else {
                let tempArray = [...tempSelectedValue];
                tempArray.push(selected);
                setTempSelectedValue(tempArray);
            }
        }
        else {
            setTempSelectedValue([selected]);
        }
    }
    function passTempArrayIntoActualState(){
        if(props.multi){
            props.onSelectState(tempSelectedValue)
            props.closeBottomSheet()
        }
        else{
            props.onSelectState([tempSelectedValue])
        }
    }
    function  closeBottomSheet()
    {
        props.closeBottomSheet()
    }
    function checkSelected(item){
        let check;
        if(props.heading &&props.multi)
        {
            check = tempSelectedValue.some((selected) => selected.id === item.id);
        }
        else
        {
            check = props.selectedValue.some((selected) => selected.id === item.id);
        }
        return check
    }
    return (
        <ActionSheet ref={props.bottomSheetRef}>
            {props?.heading && props.multi &&
                <View style={styles.headingView}>
                    <View>
                        <TouchableWithoutFeedback
                            onPress={closeBottomSheet}>
                            <View style={styles.crossView}>
                                <Image
                                    resizeMode={"contain"}
                                    style={styles.crossStyle}
                                    source={IC_CROSS}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.heading}</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={passTempArrayIntoActualState}>
                            <View style={styles.buttonView}>
                                <Text style={[{ fontSize: 16, color: 'black' }]}>
                                    Done
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            }
            {props.heading &&!props.multi&&
                <View style={styles.headingStyleSingleSelect}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.heading}</Text>
                    </View>
                </View>
            }
            
            <ScrollView>
                <FlatList data={props.options}
                          keyExtractor={(item) => item?.id}
                          renderItem={({item, index}) => {
                              let checkSelectedValue=checkSelected(item)
                              return (
                                  <View key={item?.id + index}>
                                      <TouchableOpacity
                                          onPress={() => {
                                              if(props.multi &&props.heading) {
                                                  temporaryAddItems(item)
                                              }
                                              else {
                                                  checkSingleOrMultipleFilters(item);
                                              }
                                          }
                                          }>
                                          <View style={styles.renderView}>
                                              <Text style={styles.renderViewText}>
                                                  {item.name}
                                              </Text>
                                              {(checkSelectedValue) &&
                                                  <Image source={IC_CHECK} style={styles.icCheckImage}/>
                                              }
                                          </View>
                                          <View style={styles.lineView}></View>
                                      </TouchableOpacity>
                                  </View>
                              );
                          }
                          }/>
            </ScrollView>
        </ActionSheet>
    );
}

export default CustomActionSheet;
const styles = StyleSheet.create({
    renderView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    icCheckImage: {
        height: 12,
        width: 12,
        tintColor: 'red',
        resizeMode: 'contain',
    },
    lineView: {
        width: '100%',
        height: 1,
        backgroundColor: '#e8e8e8',
    },
    headingView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        paddingLeft:20,
        paddingRight:20
    },
    crossStyle:{
        height: 15,
        width: 15,
        marginStart:7,
        marginEnd:7,
        top:1
    },
    crossView: {
        height: 25,
        width: 25,
        backgroundColor: '#E6ECEF',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonView: {
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        borderRadius: 10,
    },
    renderViewText: {fontSize: 16,
        color: 'black'
    },
    headingStyleSingleSelect:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 25,
    }
    
});
