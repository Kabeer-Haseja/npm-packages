import React, {createRef, useState} from 'react';
import {SafeAreaView, View,StyleSheet} from 'react-native';
import CustomDatePicker from './CustomComponents/CustomDatePicker';
import CustomFormInput from './CustomComponents/CustomFormInput';
import CustomBottomSheet from './CustomComponents/CustomBottomSheet';
import CustomChipSelector from './CustomComponents/CustomChipSelector';

function App(props) {
    const [selectedCreatedAt, setSelectedCreatedAt] = useState([]);
    const [input, setInput] = useState('Kabeer');
    const [singleSelect, setSingleSelect] = useState([]);
    const [category, setCategory] = useState([]);
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
    
    return (
        <SafeAreaView>
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
                    placeholderTextColor={'red'}
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
                    multi={true}
                />
            </View>
        
        </SafeAreaView>
    
    );
}

export default App;
const styles=StyleSheet.create({
    rowStyle:{
        flexDirection: 'row',
        paddingLeft:20,
        paddingRight:40,
    },
    chipViewStyle:{
        backgroundColor:'#F0F5FC',
        fontColor:'#ba1f24',
        borderColor:'#ba1f24',
        fontWeight:'bold'
        
    }
})
