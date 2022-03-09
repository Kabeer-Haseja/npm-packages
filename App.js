import React, {createRef, useEffect, useState} from 'react';
import {SafeAreaView, View,StyleSheet} from 'react-native';
import CustomDatePicker from './CustomComponents/CustomDatePicker';
import CustomFormInput from './CustomComponents/CustomFormInput';
import CustomBottomSheet from './CustomComponents/CustomBottomSheet';
import CustomChipSelector from './CustomComponents/CustomChipSelector';
import CustomLink from './CustomComponents/CustomLink';
import CustomPicker from './CustomComponents/CustomPicker';
import CustomBoolean from './CustomComponents/CustomBoolean';

function App(props) {
    const [selectedCreatedAt, setSelectedCreatedAt] = useState([]);
    const [input, setInput] = useState('Kabeer');
    const [boolValue,setBoolValue]=useState([])
    
    const [singleSelect, setSingleSelect] = useState([]);
    const [addLinkName, setAddLinkName] = useState([]);
    
    const [category, setCategory] = useState([]);
    const [addFile, setAddFile] = useState([]);
    
    const categoriesList = [
        {id: 1, name: 'category'},
        {id: 2, name: 'cat2'},
        {id: 3, name: 'cat1'},
        {id: 4, name: 'cat1'},
        {id: 5, name: 'cat1'},
        {id: 6, name: 'cat1'},
        {id: 7, name: 'cat'},
    ];
    const multiList = [
        {id: 1, name: 'Kaber'},
        {id: 2, name: 'Hello'},
        {id: 3, name: 'Hello'},
        {id: 4, name: 'World'},
    
    ];
    const singleSelectRef = createRef();
    const linkRef = createRef();
    const AttachmentRef = createRef();
    useEffect(()=>{
        console.log(boolValue)
    },[boolValue])
    return (
        <SafeAreaView>
            <View style={{marginTop:30}}>
            <View style={styles.rowStyle}>
                <CustomDatePicker
                    title={'created At'}
                    mode={'date'}
                    selectedValue={selectedCreatedAt[0]}
                    onDateSelected={setSelectedCreatedAt}
                />
            </View>
            <View style={styles.rowStyle}>
                <CustomFormInput
                    value={input}
                    title={'title'}
                    placeholder={'Name Here'}
                    onChangeText={(text) => {
                        setInput(text);
                    }}
                    textTitleStyle={{fontSize: 16}}
                    textInputStyle={{fontWeight: 'bold'}}
                />
            </View>
            <View style={styles.rowStyle}>
                <CustomBottomSheet
                    options={multiList}
                    title={'SingleSelect'}
                    selectedValue={singleSelect}
                    bottomSheetRef={singleSelectRef}
                    onSelectValue={setSingleSelect}
                />
            </View>
            <View style={styles.rowStyle}>
                <CustomChipSelector
                    chipsViewStyle={styles.chipViewStyle}
                    options={categoriesList}
                    selectedValue={category}
                    onSelectedValue={setCategory}
                />
            </View>
            <View>
            <CustomLink
                chipsViewStyle={styles.chipViewStyle}
                selectedValue={addLinkName}
                bottomSheetRef={linkRef}
                onSelectedValue={setAddLinkName}
                         />
            </View>
                <View style={styles.rowStyle}>
                  <CustomPicker
                      title={"Attachment"}
                      bottomSheetRef={AttachmentRef}
                      selectedValue={addFile}
                      onSelectedValue={setAddFile}
                     heading={"Select"}
                      multi={true}
                  />
                </View>
                <View style={styles.rowStyle}>
                    <CustomBoolean
                        selectedValue={boolValue}
                        onSelectedValue={setBoolValue}
                        chipsViewStyle={styles.chipViewStyle}

                    />
                </View>
            </View>
        </SafeAreaView>
    
    );
}

export default App;
const styles=StyleSheet.create({
    rowStyle:{
        paddingLeft:20,
        paddingRight:20,
    },
    chipViewStyle:{
        backgroundColor:'#F0F5FC',
        fontColor:'#ba1f24',
        fontWeight:'bold',
        borderColor:'#ba1f24'
    }
    
})
