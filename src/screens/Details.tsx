import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useRoute} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({navigation}: DetailsProps) => {
  const route = useRoute();
  const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    backgroundColor: '#000000',
    fontSize: 40,
    marginBottom: 39,
    padding: 10,
    fontWeight: 'bold',
  },
});
