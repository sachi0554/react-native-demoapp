import React  from 'react';
import {View , Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetails from '../componets/resultDetails';

const ResultList=({title, results, navigation})=>{
 if(!results.length){
    return null
 }
 return <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(results)=> results.id}
          renderItem={({item})=>{ 
              return (
                  <TouchableOpacity onPress={()=> navigation.navigate('Result',{id:item.id})}>
                  <ResultDetails result={item}/>
                  </TouchableOpacity>
                );
          }}
         
         />
        </View>
};

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
   
});  

export default withNavigation(ResultList);