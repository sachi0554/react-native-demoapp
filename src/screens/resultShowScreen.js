import React,{useState,useEffect} from 'react';
import {View , Text , StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yepl';

const ResultShowScreen=({navigation})=>{
    const [result ,setResult]= useState([]) 
    const id = navigation.getParam('id');
    const getResult= async(id)=>{
    const res =await yelp.get(`/${id}`);
      setResult(res.data)
    }
  useEffect(()=>{
    getResult(id);
  },[]) ; 
  
  if(!result){
    return null;
  }
 return (
        <View style={{flex:1}}>
          <Text>{result.name} </Text>
          <FlatList
           data={result.photos}
           keyExtractor={(photo)=> photo}
           renderItem={({item})=>{
             return <Image style={styles.image} source={{uri:item}}/> 
           }}

          />
        </View>
       );
};

const styles = StyleSheet.create({
  image:{
    height:200,
    width:300
  }
});  

export default ResultShowScreen;