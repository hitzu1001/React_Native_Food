import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) {
    return null;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1483137646075-6f011a268012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80' }}
      style={{ width: '100%', height: '100%' }} >
      <View>
        <Text style={styles.name}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 270,
    height: 180,
    margin: 10,
    borderRadius: 10,
  }
});
export default ResultsShowScreen;
