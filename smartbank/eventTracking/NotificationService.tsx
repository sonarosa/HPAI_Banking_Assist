import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const PersistentNotification = ({ secondApiPromise }) => {
  const moveAnimation = new Animated.Value(-400); // Initial position off the screen
  const [notificationMessage, setNotificationMessage] = useState('Loading...');
  
  useEffect(() => {
    // Animate the notification's position from left to right
    Animated.timing(moveAnimation, {
      toValue: -2.0, // Final position
      duration: 3000, // Duration of the animation (adjust as needed)
      easing: Easing.linear,
      useNativeDriver: false, // Required for positioning
    }).start();

    performSecondApiCall();
  }, []);

  const performSecondApiCall = async () => {
    try {
      const response = await secondApiPromise; // Assuming secondApiPromise is in scope

      if (response && typeof response === 'object') {
        // Assuming the response is JSON data
        setNotificationMessage('Data received from the second server: ' + JSON.stringify(response));
      } else if (typeof response === 'string') {
        setNotificationMessage('Text Data received from the second server: ' + response);
      }
    } catch (error) {
      setNotificationMessage('Failed to fetch data from the second API: ' + error.message);
    }
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: moveAnimation }] }]}>
      <Text style={styles.text}>
      {notificationMessage}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300, // Set a specific width for the notification
    backgroundColor: 'white', // Change the background color to white
    padding: 10, // Adjust padding for spacing
    borderRadius: 20, // Increase the borderRadius for a rounded chat-like shape
    borderColor: 'black', // Add a black border
    borderWidth: 1, // Specify the border width
    shadowColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red shadow color
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1, // Corrected the shadowOpacity to 1
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10, // Add margin at the bottom to move it up
  },
  text: {
    color: 'black', // Set the font color to black
    fontSize: 14, // Increase the font size for better readability
    fontWeight: 'bold',
  },
});

export default PersistentNotification;
