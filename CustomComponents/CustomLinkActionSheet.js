import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import CustomFormInput from './CustomFormInput';

function CustomLinkActionSheet(props) {
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    
    useEffect(()=>{
        if(props.selectedValue?.title!==""&& props.selectedValue?.link!==null)
        {
            setTitle(props.selectedValue?.title)
            setLink(props.selectedValue?.link)
        }
    },[props.selectedValue])
    
    function renderTitle() {
        return (
            <CustomFormInput
                keyboardType={"default"}
                title={"Title"}
                placeholder={"Enter Title"}
                value={title}
                onChangeText={(value) => {
                    setTitle(value)
                }}
             />
        )
    }
    function renderUrl() {
        return (
            <View style={{marginTop: 15}}>
                <CustomFormInput
                    keyboardType={"default"}
                    title={"Link"}
                    placeholder={"Enter Link"}
                    value={link}
                    onChangeText={(value) => {
                        setLink(value)
                    }}
                   
                />
            </View>
        )
    }
    function renderButtons() {
        return (
            <View
                style={[{ flexDirection: "row", justifyContent: "space-around", flex: 1, marginBottom: 70, paddingTop: 15 }]}>
                <TouchableWithoutFeedback >
                    <View style={{ height: 50, paddingHorizontal: 60, justifyContent: "center", borderRadius: 10 }}>
                        <Text style={[{ fontSize: 16, color: '#000000' }]}>
                            Cancel
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress={onSelected}
                    style={styles.buttonView}>
                 <Text style={{textAlign:'center',color:'#fff'}}>   Save</Text>
                </TouchableOpacity>
            </View>
        
        )
    }
    function onSelected(){
      if(title!=="" && link!=="")
      {
          props.onSelectedValue({
              title: title,
              link: link
          })
          props.closeBottomSheet()
      }
      else{
      
      }
      
    }
    return (
        <View>
            <ActionSheet ref={props.bottomSheetRef}>
                <View style={{margin:25}}>
                    {renderTitle()}
                    {renderUrl()}
                    {renderButtons()}
                </View>
            </ActionSheet>
        </View>
    );
}

export default CustomLinkActionSheet;
const styles = StyleSheet.create({
    buttonView: {
        height: 50,
        width: "45%",
        backgroundColor: '#ba1f24',
        paddingHorizontal: 30,
        justifyContent: "center",
        borderRadius: 10,
    },
})
