// Import any necessary modules for making network requests (e.g., Axios).

export function trackEvent(eventData) {
    
  const apiUrl = 'http://192.168.1.5:8000/fetchData';

    // Construct the payload with event name and data
    // const payload = {
    //   event: eventt,
    //   data: eventName,
    //   time: eventTime// Replace with the actual event data
    // };
    console.log(eventData)
    const eventDataJson = JSON.stringify(eventData);

    fetch(apiUrl, {
      method: 'POST', // Use 'GET' for this request
      headers: {
        'Content-Type': 'application/json',
      },
      // Send the payload as JSON in the request body
      body: eventDataJson,

    })
    .then((response) => {
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text(); // Handle non-JSON responses as text
        }
      } else {
        throw new Error('Network request failed');
      }
    })
    .then((data) => {
      if (typeof data === 'string') {
        console.log('Text Data received from the server:', data);
      } else {
        console.log('Data received from the server:', data);
        // You can update your component state or perform any other action with the JSON data.
      }
    })
    .catch((error) => {
      console.error('Failed to fetch data:', error);
    });
    
  
}
