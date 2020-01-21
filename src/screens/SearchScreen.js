import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => (result.price === price));
  }

  return (
    <>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1483137646075-6f011a268012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80' }}
        style={{ width: '100%', height: '100%' }} >
        <SearchBar
          term={term}
          onTermChange={newTerm => setTerm(newTerm)}
          onTermSubmitted={() => searchApi(term)}
        />
        {{ errorMessage } && <Text>{errorMessage}</Text>}
        {/* <Text>WE HAVE FOUND {results.length} RESULTS!!</Text> */}
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice('$')}
            title='Cost Effective'
          />
          <ResultsList
            results={filterResultsByPrice('$$')}
            title='Bit Pricier'
          />
          <ResultsList
            results={filterResultsByPrice('$$$')}
            title='Big Spender'
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default SearchScreen;
