import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  // const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.searchBar}>
      <Ionicons style={styles.icon} name='ios-search' />
      <TextInput
        style={styles.text}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: 20,
  },
  text: {
    flex: 1,
    fontSize: 18,
  }
});

export default SearchBar;