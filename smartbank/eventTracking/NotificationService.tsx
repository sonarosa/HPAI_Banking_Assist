import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersistentNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your modern, smaller persistent notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 8, // Decreased padding for a smaller size
    borderRadius: 4, // Decreased borderRadius for a smaller size
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 12, // Decreased font size for a smaller size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PersistentNotification;
