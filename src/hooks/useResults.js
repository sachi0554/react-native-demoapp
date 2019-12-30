import {useState, useEffect} from 'react';
import yelp from '../api/yepl';


export default ()=>{
    const [Results , setResults]=useState([]);
  const [errorMessage , setErrorMessage]=useState('');
  const saerchApi= async (searchterm)=>{
  try{
      const res = await yelp.get('/search',{
        params:{
            term:searchterm,
            limit:50,
            location:'California'
        }
      })
     setResults(res.data.businesses);
   }
  catch(e){
    setErrorMessage('Something went Wrong!');
  }
  };

  useEffect(()=>{
    saerchApi('pasta');
  },[]);

  return [saerchApi,Results , errorMessage]
}