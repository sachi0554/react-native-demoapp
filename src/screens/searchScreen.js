import React,{useState} from 'react';
import {View , Text , StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../componets/searchbar';
import useResults from '../hooks/useResults'
import ResultList from '../componets/resultList';

const SearchScreen=(props)=>{
  console.log(props);
  const [searchterm, setTerm]= useState('');
  const [saerchApi,Results , errorMessage] =useResults();

  const filterResultByPrice=(price)=>{
    return Results.filter(result=>{
      return result.price == price
    });
  }

 return (
        <View style={{flex:1}}>
          <SearchBar 
          term={searchterm} 
          onTermChange={newTerm => setTerm(newTerm)}
          onTermSubmited={()=>saerchApi(searchterm)}
          />
          <ScrollView>
          <ResultList results={filterResultByPrice('$')} title="Cost Effective"/>
          <ResultList results={filterResultByPrice('$$')} title="Bit Pricier"/>
          <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
          </ScrollView>
        </View>
       );
};

const styles = StyleSheet.create({

});  

export default SearchScreen;