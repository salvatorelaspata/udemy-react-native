import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');

   const searchAPI = async (searchTerm) => {
      console.log('searchAPI');
      try {
         const response = await yelp.get('/search', {
            params: {
               limit: 50,
               term: searchTerm,
               location: 'rome', //san jose
            },
         });
         setResults(response.data.businesses);
         setErrorMessage('');
      } catch (error) {
         setErrorMessage(error.message);
      }
   };

   useEffect(() => {
      searchAPI('pasta');
   }, []);

   return [searchAPI, results, errorMessage];
};
