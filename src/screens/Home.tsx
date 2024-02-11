import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details', {productId: '9999'})}
      />
    </View>
  );
};

export default Home;

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
