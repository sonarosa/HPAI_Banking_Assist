import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const PersistentNotification = () => {
  const moveAnimation = new Animated.Value(-400); // Initial position off the screen

  useEffect(() => {
    // Animate the notification's position from left to right
    Animated.timing(moveAnimation, {
      toValue: -2.0, // Final position
      duration: 3000, // Duration of the animation (adjust as needed)
      easing: Easing.linear,
      useNativeDriver: false, // Required for positioning
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: moveAnimation }] }]}>
      <Text style={styles.text}>
        This is your modern, smaller persistent notification
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300, // Set a specific width for the notification
    backgroundColor: 'rgba(255, 100, 100, 0.8)', // Change the background color to a chatbot-like color
    padding: 10, // Adjust padding for spacing
    borderRadius: 20, // Increase the borderRadius for a rounded chat-like shape
    shadowColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red shadow color
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 2, // Corrected the shadowOpacity to 1
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10, // Add margin at the bottom to move it up
  },
  text: {
    color: 'rgb(5, 10, 50)',
    fontSize: 14, // Increase the font size for better readability
    fontWeight: 'bold',
  },
});

export default PersistentNotification;
