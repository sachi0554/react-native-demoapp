import React  from 'react';
import {View , TextInput , StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term, onTermChange,onTermSubmited})=>{
 
 return <View style={styles.background}>
           <Feather name="search" style={styles.iconStyle}/>
           <TextInput style={styles.inputStyle}
            placeholder="search"
            autoCorrect={false}
            value={term}
            onChangeText={newTerm=> onTermChange(newTerm)}
            onEndEditing={()=> onTermSubmited()}
           />
        </View>
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#ccc',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        borderColor:'black',
        flex:1,
        fontSize:18
    },
    iconStyle:{
      fontSize:35,
      alignSelf:'center',
      marginHorizontal:17
    }
});  

export default SearchBar;