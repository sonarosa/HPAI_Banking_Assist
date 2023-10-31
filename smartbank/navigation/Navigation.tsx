// Import any necessary modules for making network requests (e.g., Axios).
import axios from 'axios';

export function trackEvent(eventName, eventData) {
    
  // Construct the payload with event data.
  const payload = {
    event: eventName,
    data: eventData,
  };
  
  const serverIP = "http://192.168.1.5";
  

  fetch(`${serverIP}/fetchData`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((response) => {
    console.log('Event tracked successfully:', response.data);
  })
  .catch((error) => {
    console.error('Failed to track event:', error);
  });
  
}
