import { API_URL } from '../../config/index'

export const getEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events?populate=*`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      
      const data = await response.json(); // Parse the response body as JSON
      
      return data; // Return the parsed JSON data
    } catch (e) {
      console.log(e);
      return null; // Return null or an empty array in case of an error
    }
  };