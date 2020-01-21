import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.details} >
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 225,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 20,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  review: {
    fontWeight: '500',
    color: 'maroon',
    marginBottom: 5,
  },
});
export default ResultsDetail;
