import React  from 'react';
import {View , Text ,Image, StyleSheet} from 'react-native';

const ResultDetails=({result})=>{
 
 return <View style={styles.container}>
           <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} Starts, {result.review_count} Review </Text>
        </View>
};

const styles = StyleSheet.create({
  container:{
    marginLeft:15
   },
  image:{
      width:250,
      height:120 ,
      borderRadius:4,
      marginBottom:5
  },
  name:{
      fontSize:16,
      fontWeight:'bold'
  },
  rating:{
    
  }
});  

export default ResultDetails;