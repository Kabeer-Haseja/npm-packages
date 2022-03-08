import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import * as DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'react-native-image-crop-picker';

function CustomAttachmentActionSheet(props) {
  
    async function  pickFile(type) {
        try {
            let results = type === "FILES" ? await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx, DocumentPicker.types.docx, DocumentPicker.types.xls, DocumentPicker.types.xlsx, DocumentPicker.types.pptx, DocumentPicker.types.csv],
            }) :
                await ImagePicker.openCamera({includeExif:true
            })
           
            let objArray = []
            return new Promise((resolve) => {
                results.map(async (item, index) => {
                    let obj = {}
                  
                    Object.assign(obj, item)
                    obj.isUploading = true
                    obj.uploaded = false
                    obj.reqSent = false
                    obj.localId = Math.random()
                    obj.documentType = item.type
                    objArray.push(obj)
                    if(index === results.length-1) resolve(objArray)
                })
            })
        } catch (err) {
      
        }
    }
    async function pickAndSetFilesLocally(type) {
  let files= await  pickFile(type)
        if(files)
        {
            console.log("ss",...props.selectedValue)
            let array=[...props.selectedValue]
            array.push(...files)
            props.onSelectedValue(array)
        }
    }
    return (
        <ActionSheet ref={props.bottomSheetRef} >
            <View style={{paddingBottom:100}}>
            <View style={{margin:20,flexDirection:'row'}}>
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{props.heading}</Text>
                </View>
             </View>
                <View style={{ marginLeft:20,flexDirection:'row',paddingBottom:10}}>
                   <TouchableOpacity onPress={()=>pickAndSetFilesLocally("FILES")}>
                        <Text style={{fontSize:16,}}>File</Text>
                   </TouchableOpacity>
                </View>
              
            </View>
        </ActionSheet>
    );
}

export default CustomAttachmentActionSheet;
