import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import * as DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'react-native-image-crop-picker';

function CustomAttachmentActionSheet(props) {
  function constructCameraObject(image) {
      let cameraObj = {
          fileCopyUri: image.path,
          size: image.size,
          type: image.mime,
          uri: image.path,
          path:image.path,
          height:image.height || 2000,
          width:image.width || 4096,
          name: "image" + Math.random(),
      }
      if(props.multi)
      {
          return [cameraObj]
      }
      else {
          return cameraObj
      }
      
  }
    async function  pickFile(type) {
        try {
            let results;
            let objArray = []
            let obj
            if(props.multi)
            {
                 results = type === "FILES" ? await DocumentPicker.pickMultiple({
                        type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx, DocumentPicker.types.docx, DocumentPicker.types.xls, DocumentPicker.types.xlsx, DocumentPicker.types.pptx, DocumentPicker.types.csv],
                    }): await ImagePicker.openCamera({includeExif:true
                    })
                if (type === "CAMERA") {
                    results = constructCameraObject(results)
                }
                return new Promise((resolve) => {
                    results.map(async (item, index) => {
                         obj = {}
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
            }
            else {
                results = type === "FILES" ? await DocumentPicker.pickSingle({
                        type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx, DocumentPicker.types.docx, DocumentPicker.types.xls, DocumentPicker.types.xlsx, DocumentPicker.types.pptx, DocumentPicker.types.csv],
                    }) :
                    await ImagePicker.openCamera({includeExif:true
                    })
                if (type === "CAMERA") {
                    results = constructCameraObject(results)
                }
                return results
            }
            
            
        } catch (err) {
      
        }
    }
    async function pickAndSetFilesLocally(type) {
  let files= await  pickFile(type)
        props.closeBottomSheet(props. bottomSheetRef)
    
        if(files)
        {
            if(props.multi)
            {
                let array=[...props.selectedValue]
                array.push(...files)
                props.onSelectedValue(array)
            }
            else {
                
                props.onSelectedValue([files])
            }
        }
     
    }
    return (
        <ActionSheet ref={props.bottomSheetRef}>
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
                <View style={{ marginLeft:20,flexDirection:'row',paddingBottom:10}}>
                    <TouchableOpacity onPress={()=>pickAndSetFilesLocally("CAMERA")}>
                        <Text style={{fontSize:16,}}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ActionSheet>
    );
}

export default CustomAttachmentActionSheet;
